"use strict";
const ps = require("prompt-sync")
const prompt = ps();

class maquinaVirtual{
    constructor(codigo){
        this.funcTable = codigo.funcTable;
        this.cuads = codigo.cuads;
        this.constantes = codigo.constantes;
        this.local = codigo.local;
        this.global = codigo.global;
        this.temp = codigo.temp;
        this.currIndex = 0;
        this.insPointer = [];
        this.paramsCounter = 0;
        this.currentEra;
        this.returnValues = []

        this.sameLineOutput = ""
    }

    performCuadOperation = () =>{
        //console.log(this.currIndex);
        let cuad = this.cuads[this.currIndex];
        let cuadFunc = this.cuads[this.currIndex][0];
        let opL, opR, res, opLVal, opRVal, resVal, resType, opLType, opRType, funcParams, arrPos,arrType, arrVal;
        //console.log(cuad);

        switch (cuadFunc){
            case '+':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];

                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))

                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))


                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal + opRVal);


                this.currIndex+=1
                //console.log("SUM",opLVal + opRVal);
                break;
            case '-':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];

                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))

                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))

                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal - opRVal);
                this.currIndex+=1
                break;
            case '*':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];

                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))

                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))

                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal * opRVal);
                this.currIndex+=1
               // console.log("SUM ", opLVal * opRVal);
                break;
            case '/':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);
                this.saveMemoryVal(resType, res, opLVal / opRVal);
                this.currIndex+=1
                break;
            case '=':
                //console.log(cuad);
                opL = cuad[1]
                opR = cuad[3]

                //console.log(cuad);

                if(Array.isArray(opR)){
                    arrPos = cuad[3][0];
                    opR = cuad[3][1]
                    arrType = this.getMemoryType(arrPos);
                    arrVal = this.getMemoryVal(arrType, arrPos);
                    opLType = this.getMemoryType(opL);
                    opLVal = this.getMemoryVal(opLType, opL);
                    opRType = this.getMemoryType(opR[arrVal]);
                    this.saveMemoryVal(opRType, opR[arrVal], opLVal);
                }else if(Array.isArray(opL)){
                    arrPos = cuad[1][0];
                    opL = cuad[1][1]
                    arrType = this.getMemoryType(arrPos);
                    arrVal = this.getMemoryVal(arrType, arrPos);
                    opRType = this.getMemoryType(opR);
                    opRVal = this.getMemoryVal(opRType, opR);
                    opLType = this.getMemoryType(opL[arrVal]);
                    opLVal = this.getMemoryVal(opLType, opL[arrVal])
                    this.saveMemoryVal(opRType, opR, opLVal);
                }
                else{
                    opLType = this.getMemoryType(opL);
                    opLVal = this.getMemoryVal(opLType, opL);

                    opRType = this.getMemoryType(opR);
                    this.saveMemoryVal(opRType, opR, opLVal);
                }
                this.currIndex+=1
                break;
            case '>':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);
                this.saveMemoryVal(resType, res, opLVal > opRVal);
                this.currIndex+=1
                break;
            case '<':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal < opRVal);

                this.currIndex+=1
                break;
            case '>=':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal >= opRVal);

                this.currIndex+=1
                break;
            case '<=':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal <= opRVal);

                this.currIndex+=1
                break;
            case '!=':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal != opRVal);

                this.currIndex+=1
                break;
            case '==':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);

                //console.log(resType);


                this.saveMemoryVal(resType, res, opLVal == opRVal);

                this.currIndex+=1
                break;
            case '&':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal && opRVal);

                this.currIndex+=1
                break;
            case '|':
                opL = cuad[1];
                opR = cuad[2];
                res = cuad[3];
                opLType = this.getMemoryType(opL);
                opLVal = Number(this.getMemoryVal(opLType, opL))
                opRType = this.getMemoryType(opR);
                opRVal = Number(this.getMemoryVal(opRType, opR))
                resType = this.getMemoryType(res);

                this.saveMemoryVal(resType, res, opLVal || opRVal);

                this.currIndex+=1
                break;
            case 'GOTO':
                this.currIndex = this.cuads[this.currIndex][3];
                //console.log(this.currIndex);
                break;
            case 'GOTOF':
                res = this.cuads[this.currIndex][1];

                resType = this.getMemoryType(res);
                resVal = this.getMemoryVal(resType, res);
                if(resVal){
                    this.currIndex+=1;
                }else{
                    this.currIndex = this.cuads[this.currIndex][3];
                }

                break;
            case 'WRITE':
                res = cuad[3];
                if(Array.isArray(res)){
                    res = cuad[3][1];
                    arrPos = cuad[3][0];
                    arrType = this.getMemoryType(arrPos);
                    arrVal = this.getMemoryVal(arrType, arrPos);

                    //console.log(arrPos, arrType, arrVal);

                    resType = this.getMemoryType(res[arrVal]);
                    resVal = this.getMemoryVal(resType, res[arrVal]);
                }else{
                    resType = this.getMemoryType(res);
                    resVal = this.getMemoryVal(resType, res);
                }
                this.currIndex+=1
                resVal = resVal.toString().split('"').join('')
                this.sameLineOutput += resVal;
                if(cuad = this.cuads[this.currIndex][0] != 'WRITE'){
                    console.log(this.sameLineOutput);
                    this.sameLineOutput = "";
                }
                break;
            case 'READ':
                resVal = prompt();

                res = cuad[3];
                resType = this.getMemoryType(res);

                //console.log(res, resVal, resType);

                this.saveMemoryVal(resType,res,resVal);


                this.currIndex+=1
                break;
            case 'PARAMETRO':
                funcParams = this.funcTable[this.currentEra].varTable.varsTable
                res = funcParams[Object.keys(funcParams)[this.paramsCounter]].dir;

                opL = cuad[1]
                opLType = this.getMemoryType(opL);
                opLVal = this.getMemoryVal(opLType, opL);

                this.saveMemoryVal(opLType, res, opLVal);

                this.paramsCounter += 1;
                this.currIndex+=1
                break;
            case 'ERA':
                this.currentEra = cuad[3];
                this.currIndex+=1
                break;
            case 'GOSUB':
                this.paramsCounter = 0;
                opR = cuad[3];
                let funcInitialCuad = this.funcTable[opR].firstCuad
                this.insPointer.push(this.currIndex+1)
                //console.log("gosub",this.currIndex+1);
                this.currIndex = funcInitialCuad;
                break;
            case 'RETURN':
                res = cuad[3];
                resType = this.getMemoryType(res);
                if(resType == 'int' || resType == 'float'){
                    resVal = Number(this.getMemoryVal(resType, res))
                }else{
                    resVal = this.getMemoryVal(resType, res)
                }
                this.currIndex = this.insPointer.pop()
                //this.returnValues.push(resVal);
                opL =  this.cuads[this.currIndex][1];
                opLType = this.getMemoryType(opL);
                this.saveMemoryVal(opLType, opL, resVal);
                break;
            case 'ENDFUNC':
                this.currIndex = this.insPointer.pop()
            case 'END':
                this.currIndex+=1
                return
            default: throw new Error("you should not be heere"); break;
        }

        return;
    }

    getMemoryType = (dir) => {
        //console.log(dir);
        switch(true){
            case dir < 8000:
                return this.global.getType(dir, 'GLOBAL')
            case dir < 18000:
                return this.local.getType(dir, 'LOCAL')
            case dir < 28000:
                return this.temp.getType(dir, 'TEMP')
            default:
                return this.constantes.getType(dir,'CONST')
        }
    }

    saveMemoryVal = (tipo, dir, val) => {
        //console.log(tipo, dir, val)
        switch(true){
            case dir < 8000:
                return this.global.updateVal(tipo, dir, val);
            case dir < 18000:
                return this.local.updateVal(tipo, dir, val);
            case dir < 28000:
                return this.temp.updateVal(tipo, dir, val);
            default:
                return this.constantes.updateVal(tipo, dir, val);
        }
    }

    getMemoryVal = (type, dir) => {
        switch(true){
            case dir < 8000:
                return this.global.getVal(type, dir);
            case dir < 18000:
                return this.local.getVal(type, dir);
            case dir < 28000:
                return this.temp.getVal(type, dir);
            default:
                return this.constantes.getVal(type, dir);
        }
    }

    resolverCuads = () => {
        var count = Object.keys(this.cuads).length;
        //console.log(this.cuads);
        while(this.currIndex < count){
            this.performCuadOperation()
        }
        console.log("");
        console.log("Program execution ended")
    }
}

module.exports = maquinaVirtual;



// '0': [ 'GOTO', 'main', '', 5 ],
// '1': [ '+', 8000, 8001, 18000 ],
// '2': [ '=', 18000, '', 8002 ],
// '3': [ 'RETURN', '', '', 8002 ],
// '4': [ 'ENDFUNC', '', '', '' ],
// '5': [ '=', 28000, '', 8003 ],
// '6': [ '=', 28001, '', 8004 ],
// '7': [ '*', 8003, 8004, 18001 ],
// '8': [ '*', 28003, 8004, 18002 ],
// '9': [ '+', 28002, 18002, 18003 ],
// '10': [ '-', 28004, 8003, 18004 ],
// '11': [ '-', 18003, 18004, 18005 ],
// '12': [ '/', 18001, 18005, 18006 ],
// '13': [ '=', 18006, '', 8005 ],
// '14': [ 'WRITE', '', '', 35500 ],
// '15': [ 'WRITE', '', '', 8005 ],
// '16': [ 'ERA', '', '', 'sum' ],
// '17': [ 'PARAMETRO', 8003, '', 18007 ],
// '18': [ 'PARAMETRO', 8004, '', 18008 ],
// '19': [ 'GOSUB', '', '', 'sum' ],
// '20': [ '=', 'sum', '', 8005 ],
// '21': [ 'WRITE', '', '', 35501 ],
// '22': [ 'WRITE', '', '', 8005 ],
// '23': [ '=', 28005, '', 8003 ],
// '24': [ '>', 8003, 28006, 25500 ],
// '25': [ 'GOTOF', 25500, '', 28 ],
// '26': [ 'WRITE', '', '', 35502 ],
// '27': [ 'GOTO', '', '', 29 ],
// '28': [ 'WRITE', '', '', 35503 ],
// '29': [ 'ENDFUNC', '', '', '' ],
// '30': [ 'END', '', '', '' ]


// {
//     '0': [ 'GOTO', 'main', '', 23 ],
//     '1': [ '=', 28000, '', 1000 ],
//     '2': [ '<', 1000, 28001, 25500 ],
//     '3': [ 'GOTOF', 25500, '', 9 ],
//     '4': [ 'READ', '', '', 8000 ],
//     '5': [ '=', 8000, '', [ 1000, [Array] ] ],
//     '6': [ '+', 1000, 28002, 18000 ],
//     '7': [ '=', 18000, '', 1000 ],
//     '8': [ 'GOTO', '', '', 2 ],
//     '9': [ 'ENDFUNC', '', '', '' ],
//     '10': [ '=', 28003, '', 1000 ],
//     '11': [ '=', 28004, '', 1001 ],
//     '12': [ '<', 1000, 28005, 25501 ],
//     '13': [ 'GOTOF', 25501, '', 21 ],
//     '14': [ '=', [ 1000, [Array] ], '', 8002 ],
//     '15': [ '==', 8002, 8001, 25502 ],
//     '16': [ 'GOTOF', 25502, '', 20 ],
//     '17': [ 'WRITE', '', '', 35500 ],
//     '18': [ 'WRITE', '', '', 1000 ],
//     '19': [ 'RETURN', '', '', 1000 ],
//     '20': [ 'GOTO', '', '', 12 ],
//     '21': [ 'WRITE', '', '', 35501 ],
//     '22': [ 'ENDFUNC', '', '', '' ],
//     '23': [ 'ERA', '', '', 'addValues' ],
//     '24': [ 'GOSUB', '', '', 'addValues' ],
//     '25': [ 'ERA', '', '', 'find' ],
//     '26': [ 'PARAMETRO', 28006, '', 18001 ],
//     '27': [ 'GOSUB', '', '', 'find' ],
//     '28': [ '=', 18002, '', 8004 ],
//     '29': [ 'ENDFUNC', '', '', '' ],
//     '30': [ 'END', '', '', '' ]
//   }