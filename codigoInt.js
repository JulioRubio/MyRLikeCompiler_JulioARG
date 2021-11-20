
let cuadruplo = require("./cuadruplos");

let cuboSemantico = {
    int:{
        int:{
            '+': 'int',
            '-': 'int',
            '*': 'int',
            '/': 'int',
            '<': 'bool',
            '>': 'bool',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        float:{
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        char:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        string:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        }  
    },
    float:{
      int:{
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        float:{
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        char:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        string:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        }  
    },
    char:{
        int:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        float:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        char:{
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': 'bool',
            '!=':'bool',
        },
        string:{
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': 'bool',
            '!=':'bool',
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        }  
    },
    bool:{
        int:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        float:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        char:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        string:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': 'bool',
            '!=':'bool',
            '|': 'bool',
            '&':'bool',
        }  
    } 
}

class condigoInt{

    constructor(){
        this.cuadruplos = new cuadruplo();
        this.counter = 0;
        this.counterT = 0;
        this.pOper = [];
        this.pilaO = []
        this.pTipos = []
        this.pSaltos = []
        this.avail = []
    }

    //Funciones globales
    agregarCuadr = (cuad) => {
        this.cuadruplos.insertCuad(cuad)
        this.counter += 1;
    }

    pOperPeek = () => {
        return this.pOper[this.pOper.length-1]
    }

    addOperando = (operando, tipo) => {
        this.pilaO.push(operando);
        this.pTipos.push(tipo)
    }

    addOperador = (oper) => {
        this.pOper.push(oper);
    }

    consumeOperador = () =>{
        this.pOper.pop()
    }

    // Expr Aritmeticas
    generarCuadrAritmetic = (oper, opL, opR, res) => {
        let cuad = [oper, opL, opR, res];
        this.agregarCuadr(cuad)
    }

    validateType = (opLType, opRType, oper) => {
        // console.log(this.pOper)
		// console.log(this.pilaO)
		// console.log(this.pTipos)
        return cuboSemantico[opLType][opRType][oper]
    }

    validarSumaResta = () =>{
        if (this.pOperPeek() == '+' || this.pOperPeek() == '-'){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            let resultType = this.validateType(opLType, opRType, oper)

            if (resultType != null){
                let res = 't' + this.counterT
                this.addOperando(res, resultType)
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, res)
                
                //if any operand were a temporal space return it to avail?
            }else{
                console.log("Error, type mismatch");
            }
        }
    }

    validarMultDiv = () => {
        if (this.pOperPeek() == '*' || this.pOperPeek() == '/'){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            let resultType = this.validateType(opLType, opRType, oper)

            if (resultType != null){
                let res = 't' + this.counterT
                this.addOperando(res, resultType)
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, res)
                //if any operand were a temporal space return it to avail?
            }else{
                console.log("Error, type mismatch");
            }
        }
    }

    validarCond = () => {
        if (this.pOperPeek() == '>' || this.pOperPeek() == '<' || this.pOperPeek() == '>=' || this.pOperPeek() == '<=' || this.pOperPeek() == '!=' || this.pOperPeek() == '==' || this.pOperPeek() == '&' || this.pOperPeek() == '|' ){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            // console.log(opLVal, opLType, opRVal, opRType, oper);
            let resultType = this.validateType(opLType, opRType, oper)

            if (resultType != null){
                let res = 't' + this.counterT
                this.addOperando(res, resultType)
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, res)
                //if any operand were a temporal space return it to avail?
            }else{
                throw new Error("Error, type mismatch");
            }
        }
    }

    validarAnd = () => {
        if (this.pOperPeek() == '&'){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            console.log(opLVal, opLType, opRVal, opRType, oper);
            let resultType = this.validateType(opLType, opRType, oper)

            if (resultType != null){
                let res = 't' + this.counterT
                this.addOperando(res, resultType)
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, res)
                //if any operand were a temporal space return it to avail?
            }else{
                throw new Error("Error, type mismatch");
            }
        }
    }

    validarOr = () => {
        if (this.pOperPeek() == '|' ){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            console.log(opLVal, opLType, opRVal, opRType, oper);
            let resultType = this.validateType(opLType, opRType, oper)

            if (resultType != null){
                let res = 't' + this.counterT
                this.addOperando(res, resultType)
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, res)
                //if any operand were a temporal space return it to avail?
            }else{
                throw new Error("Error, type mismatch");
            }
        }
    }
    //Estatutos Lineales 

    writeStmt = () =>{
        this.pTipos.pop()
        this.agregarCuadr(['WRITE', '', '',this.pilaO.pop()])
    }

    readStmt = () => {
        this.pTipos.pop()
        this.agregarCuadr(['READ', '', '', this.pilaO.pop()])
    }

    callVoidStmt = () => {
        this.pTipos.pop()
        this.agregarCuadr(['LLAMADA_VOID', '', '', this.pilaO.pop()])
    }

    asignStmt = () => {
        let assigner = this.pilaO.pop();
        this.pTipos.pop()
        let res = this.pilaO.pop();
        this.pTipos.pop()
        this.agregarCuadr([this.pOper.pop(), res, '', assigner])
    }

    returnStmt = () => {
        this.pTipos.pop()
        this.agregarCuadr(['RETURN', '', '', this.pilaO.pop()])
    }

    gotoMain = () =>{
        this.agregarCuadr(["GOTO",'main','',''])
    }

    fillMain = () =>{
        this.cuadruplos.fillCuad(0, this.counter)
    }

    //Estatus no lineales

    ifStmt = () => {
        let exp_type = this.pTipos.pop()
        if(exp_type != 'bool'){
            console.error('type mismatch');
        }else{
            let res = this.pilaO.pop()
            this.agregarCuadr(['GOTOF', res, '', ''])
            this.pSaltos.push(this.counter-1)
        }
    }

    fill_ifStmt = () =>{
        let expPos = this.pSaltos.pop()
        this.cuadruplos.fillCuad(expPos, this.counter)
    }

    elseStmt = () => {
        this.agregarCuadr(['GOTO', '', '', ''])
        let falsePos = this.pSaltos.pop()
        this.pSaltos.push(this.counter-1)
        this.cuadruplos.fillCuad(falsePos,this.counter)
    }

    whileStmtMarkStart = () => {
        this.pSaltos.push(this.counter)
    }

    whileStmt = () =>{
        let tipoWhile = this.pTipos.pop()
        if(tipoWhile != 'bool'){
            console.error("Type-mismatch");
        }else{
            let res = this.pilaO.pop()
            this.agregarCuadr(['GOTOF', res, '', ''])
            this.pSaltos.push(this.counter-1)
        }
    }

    endWhileStmt = () => {
        let endPos = this.pSaltos.pop()
        let returnPos = this.pSaltos.pop()
        this.agregarCuadr(['GOTO','','',returnPos])
        this.cuadruplos.fillCuad(endPos,this.counter)
    }

    //no se jajaja
    forStmt = () => {
        
    }

    //functions

    genEra = (calledFunc) => {
        this.agregarCuadr(['ERA', '', '', calledFunc])
    }

    goSub = (calledFunc) =>{
        this.pilaO.push(calledFunc)
        this.agregarCuadr(['GOSUB', '', '', calledFunc])
    }

    endFunc = () =>{
        this.pilaO.pop()
        this.agregarCuadr(['ENDFUNC','','',''])
    }

    generateParam = (paramCounter) =>{
        this.pTipos.pop()
        this.agregarCuadr(['PARAMETRO', this.pilaO.pop(), '', paramCounter])
    }
}

// || this.pOperPeek() == '&' || this.pOperPeek() == '|' 

module.exports = condigoInt;