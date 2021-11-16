let cuboSemantico = require("./cuboSemantico");
let cuadruplo = require("./cuadruplos");

class condigoInt{

    constructor(){
        this.cuadruplos = new cuadruplo();
        this.counter = 0;
        this.counterT = 0;
        this.pOPer = [];
        this.pilaO = []
        this.pTipos = []
        this.pSaltos = []
        this.avail = []
        this.cuboSemantico = cuboSemantico 
    }

    //Funciones globales
    agregarCuadr = (cuad) => {
        this.cuadruplos.insertCuad(cuad)
        this.counter += 1;
    }

    pOperPeek = () => {
        return pOper[pOper.length-1];
    }

    addOperando = (operando,tipo) => {
        this.pilaO.push(operando);
        this.pTipos.push(tipo)
    }

    addOperador = (oper) => {
        this.pOPer.push(oper);
    }

    // Expr Aritmeticas
    generarCuadrAritmetic = (oper, opL, opR, res) => {
        let cuad = [oper, opL, opR, res];
        this.agregarCuadr(cuad)
    }

    validateType = (opLType, opRType, oper) => {
        return cuboSemantico[opLType][opRType][oper]
    }

    validarSumaResta = () =>{
        if (this.pOperPeek == '+' || this.pOperPeek == '-'){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            let resultType = validateType(opLType, opRType, oper)

            if (resultType != null){
                let res = 't' + this.counterT
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, res)
                //if any operand were a temporal space return it to avail?
            }else{
                console.log("Error, type mismatch");
            }
        }
    }

    validarMultDiv = () => {
        if (this.pOperPeek == '*' || this.pOperPeek == '/'){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            let resultType = validateType(opLType, opRType, oper)

            if (resultType != null){
                let res = 't' + this.counterT
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, res)
                //if any operand were a temporal space return it to avail?
            }else{
                console.log("Error, type mismatch");
            }
        }
    }


    //Estatutos Lineales 

    writeStmt = () =>{
        this.agregarCuadr(['WRITE', '', '',this.pilaO.pop()])
    }

    readStms = () => {
        this.agregarCuadr(['READ', '', '', this.pilaO.pop])
    }

    callVoidStmt = () => {
        this.agregarCuadr(['LLAMADA_VOID', '', '', this.pilaO.pop])
    }

    asignStmt = () => {
        this.agregarCuadr([this.pOPer.pop(), this.pilaO.pop, this.pilaO.pop, ''])
    }

    returnStmt = () => {
        this.agregarCuadr(['RETURN', '', '', this.pilaO.pop])
    }

    gotoMain = () =>{
        this.agregarCuadr(["GOTO",'main','',''])

    }

    fillMain = () =>{

    }

    //Estatus no lineales

    ifStmt = () => {
        let exp_type = this.pTipos.pop()

        if(exp_type != 'bool'){
            console.log('error, type mismatch');
        }else{
            let res = this.pilaO.pop()
            this.agregarCuadr(['GOTOF', res, '', ''])
            this.pSaltos.push(this.counter-1)
        }
    }

    fill_ifStmt = () =>{
        let expPos = this.pSaltos.pop()
        fillCuadr(expPos, this.counter)
    }

    elseStmt = () => {
        this.agregarCuadr(['GOTO', '', '', ''])
        let falsePos = this.pSaltos.pop()
        this.pSaltos.push(this.counter-1)
        fillCuadr(falsePos,this.counter,)
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
        this.agregarCuadr(['GOTO',,'','returnPos'])
        fillCuadr(endPos,this.counter)
    }

    //no se jajaja
    forStmt = () => {
        
    }

    
}

module.exports = condigoInt;