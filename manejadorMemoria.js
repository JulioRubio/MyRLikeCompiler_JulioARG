/*el manejador de memoria funciona como el middleman entre el mapa de memoria y el lexer
en este se crean los cuatro segementos de mapa de memoria para los cuatro tipos de mapas*/
let mapaMemoria = require("./mapaMemoria");

class manejadorMemoria{
    constructor(){
        this.mapaGlobal = new mapaMemoria('GLOBAL', 1000, 8000);
        this.mapaLocal = new mapaMemoria('LOCAL', 8000, 18000);
        this.mapaTemp = new mapaMemoria('TEMP', 18000, 28000);
        this.mapaCTE = new mapaMemoria('CONST', 28000, 38000);
    }

    /*al momento de crear una nueva variable global, necesitamos el apuntador siguiente que no contiene ya un valor asignado
    esta funcion llama a la funcion getPointer y dado un tipo regresara el apuntador libre siguiente a ser utilizado*/
    getCurrentGlobalPointer= (tipo) => {
        return this.mapaGlobal.getPointer(tipo);
    }

    /*al momento de crear una nueva variable local, necesitamos el apuntador siguiente que no contiene ya un valor asignado
    esta funcion llama a la funcion getPointer y dado un tipo regresara el apuntador libre siguiente a ser utilizado*/
    getCurrentLocalPointer = (tipo) =>{
        return this.mapaLocal.getPointer(tipo);
    }

    /*al momento de crear una nueva constante, necesitamos el apuntador siguiente que no contiene ya un valor asignado
    esta funcion llama a la funcion getPointer y dado un tipo regresara el apuntador libre siguiente a ser utilizado*/
    getCurrentCTEPointer = (tipo) => {
        return this.mapaCTE.getPointer(tipo);
    }

     /*al momento de crear un nuevo arreglo global, necesitamos el apuntador siguiente que no contiene ya un valor asignado
    esta funcion llama a la funcion getPointers que dado el tamaño del arreglo regresara los apuntadores para asignar todas las casillas
    del arreglo en la tabla de var glboal y dado un tipo regresara el apuntador libre siguiente a ser utilizado*/
    getArrGlobalPointers = (tipo, tam) =>{
        return this.mapaGlobal.getPointers(tipo, tam);
    }

    /*esta funcion es utilizada despues de obtener el pointer actual para asignar a la memoria los datos a guardar, el campo val sera el que sera utilizado por la maquina
    virtual */
    inserGlobal = (dir ,tipo, name, val) => {
        this.mapaGlobal.inserDir(dir, tipo, name, val)
    }
    /*esta funcion actualiza los datos dentro de una posicion previamente insertada a la memoria global */
    updateGlobal = (tipo, dir, val) =>{
        this.mapaGlobal.updateVal(tipo, dir, val)
    }

    /*esta funcion es utilizada despues de obtener el pointer local actual para asignar a la memoria los datos a guardar, el campo val sera el que sera utilizado por la maquina
    virtual */
    inserLocal = (dir, tipo, name, val) => {
        this.mapaLocal.inserDir(dir, tipo, name, val)
    }

    /*esta funcion actualiza los datos dentro de una posicion previamente insertada a la memoria local */
    updateLocal = (tipo, dir, val) =>{
        // console.log(tipo, dir, val)
        this.mapaLocal.updateVal(tipo, dir, val)
    }

    /*esta funcion es utilizada despues de obtener el pointer constante actual para asignar a la memoria los datos a guardar, el campo val sera el que sera utilizado por la maquina
    virtual */
    inserConst = (dir, tipo, name, val) =>{
        this.mapaCTE.inserDir(dir, tipo, name, val);
    }

    /*dado un tipo, regresa todos los valores encontrados en la memoria global de ese tipo */
    getMapaGlobal = (tipo) =>{
        return this.mapaGlobal.getMemoria(tipo);
    }

    /*dado un tipo, regresa todos los valores encontrados en la memoria local de ese tipo */
    getMapaLocal = (tipo) => {
        return this.mapaLocal.getMemoria(tipo);
    }

    /*dado un tipo, regresa todos los valores encontrados en la memoria constatnte de ese tipo */
    getMapaConst = (tipo) =>{
        return this.mapaCTE.getMemoria(tipo)
    }
}

module.exports = manejadorMemoria;
