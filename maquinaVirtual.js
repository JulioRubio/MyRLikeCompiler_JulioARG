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
    }

    performCuadOperation = () =>{
        //console.log(this.currIndex);
        let cuad = this.cuads[this.currIndex];
        let cuadFunc = this.cuads[this.currIndex][0];
        let opL, opR, res, opLVal, opRVal, resVal, resType, opLType, opRType, funcParams;
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

                opLType = this.getMemoryType(opL);
                opLVal = this.getMemoryVal(opLType, opL);

                opRType = this.getMemoryType(opR);
                opRVal = this.getMemoryVal(opRType, opR);

                this.saveMemoryVal(opRType, opR, opLVal);
                this.currIndex+=1

                break;
            case '>':

            case '<':
            case '>=':
            case '<=':
            case '!=':
            case '==':
            case '&':
            case '|':
                break;
            case 'GOTO':
                this.currIndex = this.cuads[this.currIndex][3];
                //console.log(this.currIndex);
                break;
            case 'GOTOF':
                let validationDir = this.cuads[this.currIndex][1];
                let result = this.cuads[this.currIndex][3];
                this.currIndex = this.cuads[this.currIndex][3];
                break;
            case 'WRITE':
                cuad = this.cuads[this.currIndex];
                res = cuad[3];
                resType = this.getMemoryType(res);
                resVal = this.getMemoryVal(resType, res);
                console.log(resVal);
                this.currIndex+=1
                break;
            case 'READ':
                this.currIndex+=1
                break;
            case 'PRINT':
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
        console.log("ENDED")
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