
let cuadruplo = require("./cuadruplos");
let cuboSemantico = require("./cuboSemantico");
//clase encargada de generar los cuadruplos, se apoya del cubo semantico para llevar esto a cabo.
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

    //agrega un nuevo cuadruplo a la instancia de la clase cuadruplos que se ha creado en el constructor.
    agregarCuadr = (cuad) => {
        this.cuadruplos.insertCuad(cuad)
        this.counter += 1;
    }

    //esta funcion brinda el apoya de ver el último valor que se ha introducido a la pila, esto es porque no necesitamos consumirlo solo necesitamos saber que operador es
    pOperPeek = () => {
        return this.pOper[this.pOper.length-1]
    }

    //agrega un nuevo operando y su tipo a la pila de operandos y a la pila de tipos
    addOperando = (operando, tipo) => {
       //console.log(operando,tipo);
        this.pilaO.push(operando);
        this.pTipos.push(tipo)
    }

    //agrega un nuevo operador a la pila de operadores.
    addOperador = (oper) => {
        this.pOper.push(oper);
    }
    //consume un operador de la pila pOper
    consumeOperador = () =>{
        this.pOper.pop()
    }

    // Expr Aritmeticas

    //genera el cuadruplo para expresiones aritmeticas como son una suma, multiplicacion o una comparación. 
    //se usa esta funcion pues estos tipos de operaciones tienen el mismo orden del arreglo por lo tanto no tiene sentido reperit lineas en sus respectivas funciones. 
    generarCuadrAritmetic = (oper, opL, opR, res) => {
        let cuad = [oper, opL, opR, res];
        this.agregarCuadr(cuad)
    }

    //recibe dos tipos y un operador que basándose en el cubo semántico regresara nulo si no es una operación valida o sino regresa el resultado esperado de esa operación
    //este resultado de tipo se guarda en el temporal para saber de que tipo es.
    validateType = (opLType, opRType, oper) => {
        // console.log(this.pOper)
		// console.log(this.pilaO)
		// console.log(this.pTipos)
        //console.log(opLType, opRType, oper);
        return cuboSemantico[opLType][opRType][oper]
    }

    //valida si la siguiente operacion a efectuar es una suma o resta. Esto se necesita pues a diferencia de otras funciones esta se llama en lugares donde no debería 
    //por la forma en la cual se implementa una gramática
    //Si si es una suma o resta guarda el valor izquierdo y su tipo y el valor derecho y su tipo, con estos dos tipos y el operador (+,-) se llama a la función de validación
    //en caso de que la función de validación regreso nulo significa que esta operación no es posible realizarla pues no es valida.
    validarSumaResta = (mapaTemp) =>{
        // console.log(mapaTemp);
        if (this.pOperPeek() == '+' || this.pOperPeek() == '-'){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            let resultType = this.validateType(opLType, opRType, oper)

            if (resultType != null){
                let dir = mapaTemp.getPointer(resultType);
                let res = 't' + this.counterT
                //console.log(mapaTemp)
                mapaTemp.inserDir(dir, resultType, res, '')
                this.addOperando(dir, resultType)
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, dir)
                
                //if any operand were a temporal space return it to avail?
            }else{
                throw new Error("Error, type mismatch")
            }
        }
    }

    //valida si la siguiente operacion a efectuar es una mult o div. Esto se necesita pues a diferencia de otras funciones esta se llama en lugares donde no debería 
    //por la forma en la cual se implementa una gramática
    //Si si es una mult o div guarda el valor izquierdo y su tipo y el valor derecho y su tipo, con estos dos tipos y el operador (*,/) se llama a la función de validación
    //en caso de que la función de validación regreso nulo significa que esta operación no es posible realizarla pues no es valida.
    validarMultDiv = (mapaTemp) => {
        // console.log("mult ", mapaTemp);
        if (this.pOperPeek() == '*' || this.pOperPeek() == '/'){
            let opRVal = this.pilaO.pop()
            let opLVal = this.pilaO.pop()
            let oper = this.pOper.pop()
            let opRType = this.pTipos.pop()
            let opLType = this.pTipos.pop()
            let resultType = this.validateType(opLType, opRType, oper)
            // console.log('res type', resultType);

            if (resultType != null){
                let res = 't' + this.counterT
                let dir = mapaTemp.getPointer(resultType);
                this.addOperando(dir, resultType)
                mapaTemp.inserDir(dir, resultType, res, '')
                this.counterT+= 1;
                this.generarCuadrAritmetic(oper, opLVal, opRVal, dir)
                //if any operand were a temporal space return it to avail?
            }else{
                throw new Error("Error, type mismatch");

            }
        }
    }

    //valida si la siguiente operacion a efectuar es una condicion. Esto se necesita pues a diferencia de otras funciones esta se llama en lugares donde no debería 
    //por la forma en la cual se implementa una gramática
    //Si si es una condicion el valor izquierdo y su tipo y el valor derecho y su tipo, con estos dos tipos y el operador se llama a la función de validación
    //en caso de que la función de validación regreso nulo significa que esta operación no es posible realizarla pues no es valida.
    validarCond = (mapaTemp) => {
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
                let dir = mapaTemp.getPointer(resultType);
                this.addOperando(dir, resultType)
                this.counterT+= 1;
                //console.log(dir, resultType, res, '')
                mapaTemp.inserDir(dir, resultType, res, '')
                this.generarCuadrAritmetic(oper, opLVal, opRVal, dir)
                //if any operand were a temporal space return it to avail?
            }else{
                throw new Error("Error, type mismatch");
            }
        }
    }
    //Estatutos Lineales 

    //genera el cuadruplo que equivale a un write statement, incluyendo la dirección que se va a leer en ejecución
    writeStmt = () =>{
        this.pTipos.pop()
        this.agregarCuadr(['WRITE', '', '',this.pilaO.pop()])
    }

    //genera el cuadruplo que equivale a un write statement para un arreglo, incluyendo la dirección del indice (ejemplo si se lee de un id o un CTE_I) 
    //y la dirección del arreglo que se va a leer en ejecución
    arrWriteStmt = () =>{
        this.pTipos.pop()
        this.pTipos.pop()
        let pos = this.pilaO.pop();
        let arr = this.pilaO.pop();
        this.agregarCuadr(['WRITE', '','', [pos,arr]])
    }

    //genera el cuadruplo que equivale a un read statement, incluyendo la dirección a la cual se le asignara el valor leido por consola.
    readStmt = () => {
        this.pTipos.pop()
        this.agregarCuadr(['READ', '', '', this.pilaO.pop()])
    }

    //genera el cuadruplo para una asignación toma el valor (asigner) al cual en ejecucion se le sera asignado el otro valor (res), valida que sea valida asignar estos valores
    //y se genere el cuadruplo de asignacion
    asignStmt = () => {
        let assigner = this.pilaO.pop();
        let lType = this.pTipos.pop()
        let res = this.pilaO.pop();
        let rType = this.pTipos.pop()
        let pOper = this.pOper.pop();

        //console.log(lType,rType,'*');
        let validate = this.validateType(lType,rType,pOper);
        //console.log(lType,rType,pOper);
        if(validate != null){
            this.agregarCuadr([pOper, res, '', assigner])
        }
        else{
            throw new Error(`Error on assignment`)
        }
        //console.log(validate);
    }



    //genera el cuadruplo para una asignación toma el valor (asigner) y su indice al cual en ejecucion se le sera asignado el otro valor (res), valida que sea valida asignar estos valores
    //y se genere el cuadruplo de asignacion
    asignArrStmt = (pointer) => {
        let assigner = this.pilaO.pop();
        let lType = this.pTipos.pop()
        let res = this.pilaO.pop();
        let rType = this.pTipos.pop()
        let pOper = this.pOper.pop();

        //console.log(lType,rType,'*');
        let validate = this.validateType(lType,rType,pOper);
        if(validate != null){
            this.agregarCuadr([pOper, res, '' , [pointer, assigner]])
        }
        else{
            throw new Error(`Error on assignment`)
        }
    }

    
    //genera el cuadruplo para una asignación toma el valor (asigner) al cual en ejecucion se le sera asignado el otro valor (res), valida que sea valida asignar estos valores
    //y se genere el cuadruplo de asignacion
    asignToArrStmt = (pointer) => {
        let assigner = this.pilaO.pop();
        let lType = this.pTipos.pop()
        let res = this.pilaO.pop();
        let rType = this.pTipos.pop()
        let pOper = this.pOper.pop();

        //console.log(lType,rType,'*');
        let validate = this.validateType(lType,rType,pOper);
        if(validate != null){
            this.agregarCuadr([pOper, [pointer, assigner], '' ,res])
        }
        else{
            throw new Error(`Error on assignment`)
        }
    }

    //genera el cuadruplo de regreso, indicando que direccion sera regresada para ser asignada posteriormente a una variable.
    returnStmt = () => {
        this.pTipos.pop()
        this.agregarCuadr(['RETURN', '', '', this.pilaO.pop()])
    }

    //genera el primer cuadruplo, este cuadruplo indica a que cuadruplo redirigirse para comenzar la ejecución
    gotoMain = () =>{
        this.agregarCuadr(["GOTO",'main','',''])
    }

    //llena la posición del primer cuadruplo creado GOTO main con el contador que indica el inicio del bloque de codigo de main.
    fillMain = () =>{
        this.cuadruplos.fillCuad(0, this.counter)
    }

    //Estatus no lineales

    //valida que el valor del GOTOF es booleano, si es booleano crea el cuadruplo goto con este valor tomado de la pila de operandos. Este cuadruplo esta incompleto pues
    //aun no se sabe a donde saltar.
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

    //llena el cuadruplo creado por la funcion ifStmt, esta funcion indica que se ha encontrado el fin de los estatutos del bloque del if y ahora se podrán llenar el gotoF del if
    fill_ifStmt = () =>{
        let expPos = this.pSaltos.pop()
        this.cuadruplos.fillCuad(expPos, this.counter)
    }

    //El else statement contiene un GOTO que será el primer cuadruplo de este bloque, este goto es utilizado por la funcion GOTOF del if para saltar los estatutos
    //pertenecientes al else. Este goto aun no esta completo pues no se sabe a donde tendrá que ir.
    elseStmt = () => {
        this.agregarCuadr(['GOTO', '', '', ''])
        let falsePos = this.pSaltos.pop()
        this.pSaltos.push(this.counter-1)
        this.cuadruplos.fillCuad(falsePos,this.counter)
    }

    //cuando se encuentra un ciclo while, se utiliza mucho de la misma funcionalidad del if pero al ser while debemos de marcar el primer cuadruplo del while
    //antes de la validacion, este es utilizado cuando se llega al final del ciclo para regresar y volver a validar el ciclo.
    whileStmtMarkStart = () => {
        this.pSaltos.push(this.counter)
    }

    /*valida la condicion del while*/
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

    /*cuando se llega al final del while ya sabemos donde termina el ciclo, por lo tanto debemos de llenar el cuadruplo creado en whileStmtMarkStart
    tambien se crea un goto para regresar al inicio del ciclo.*/
    endWhileStmt = () => {
        let endPos = this.pSaltos.pop()
        let returnPos = this.pSaltos.pop()
        this.agregarCuadr(['GOTO','','',returnPos])
        this.cuadruplos.fillCuad(endPos,this.counter)
    }


    //functions

    /*genera el cuadruplo era que es utilizado en la maquina virtual*/
    genEra = (calledFunc) => {
        this.agregarCuadr(['ERA', '', '', calledFunc])
    }

    /*genera el cuadruplo godub, este es muy similar a un goto pero a diferencias de esos en este se guarda un nombre de funcion que sera accedido en ejecucion a traves de
    la tabla de funciones. Tambien en caso de no ser void genera el temporal al cual se le asignara el return value de la funcion llamada*/
    goSub = (calledFunc, funcType, mapaTemp) =>{
        this.pTipos.push(funcType);
        this.agregarCuadr(['GOSUB', '', '', calledFunc])  

        if (funcType == 'void'){

        }else{
            let dir = mapaTemp.getPointer(funcType);
            mapaTemp.inserDir(dir, funcType, calledFunc, '')
            this.pilaO.push(dir);
        }

    }

    /*en compilacion solamente se crea el cuadruplo ENDFUNC que marcara un punto en la maquina virtual donde se regresa a la posicion original antes del brinco*/
    endFunc = () =>{
        this.pilaO.pop()
        this.pTipos.pop()
        this.agregarCuadr(['ENDFUNC','','',''])
    }

    /*crea una nueva variable temporal que servira para asignarle el valor que se esta enviando al parametro de la funcion*/
    generateParam = (mapaTemp) =>{
        let tipo = this.pTipos.pop()
        let dir = mapaTemp.getPointer(tipo)
        let res = 't' + this.counterT
        this.counterT += 1;
        mapaTemp.inserDir(dir, tipo, res, '')
        this.agregarCuadr(['PARAMETRO', this.pilaO.pop(), '', dir])
    }

    /*genera el cuadruplo que finaliza ejecucion del programa*/
    endProc = () => {
        this.agregarCuadr(['END','','',''])
    }

//languageSpecificFunctions
    generarGotoLlamadaSpecifica = (funcion, paramsCounter) =>{
        let arrayPila = {}

        while (paramsCounter > 0) {
            paramsCounter-=1;
            arrayPila[paramsCounter] = this.pilaO.pop()
        }
        this.agregarCuadr([funcion,'','',arrayPila])
    }
}

// || this.pOperPeek() == '&' || this.pOperPeek() == '|' 

module.exports = condigoInt;