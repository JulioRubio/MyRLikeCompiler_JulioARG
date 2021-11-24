let mapaMemoria = require("./mapaMemoria");

class manejadorMemoria{
    constructor(){
        this.mapaGlobal = new mapaMemoria('GLOBAL', 1000, 8000);
        this.mapaLocal = new mapaMemoria('LOCAL', 8000, 18000);
        this.mapaTemp = new mapaMemoria('TEMP', 18000, 28000);
        this.mapaCTE = new mapaMemoria('CONST', 28000, 38000);
    }

    getCurrentGlobalPointer= (tipo) => {
        return this.mapaGlobal.getPointer(tipo);
    }

    getCurrentLocalPointer = (tipo) =>{
        return this.mapaLocal.getPointer(tipo);
    }

    getCurrentCTEPointer = (tipo) => {
        return this.mapaCTE.getPointer(tipo);
    }

    getArrGlobalPointers = (tipo, tam) =>{
        return this.mapaGlobal.getPointers(tipo, tam);
    }

    inserGlobal = (dir ,tipo, name, val) => {
        this.mapaGlobal.inserDir(dir, tipo, name, val)
    }

    updateGlobal = (tipo, dir, val) =>{
        this.mapaGlobal.updateVal(tipo, dir, val)
    }

    inserLocal = (dir, tipo, name, val) => {
        this.mapaLocal.inserDir(dir, tipo, name, val)
    }

    updateLocal = (tipo, dir, val) =>{
        // console.log(tipo, dir, val)
        this.mapaLocal.updateVal(tipo, dir, val)
    }

    inserConst = (dir, tipo, name, val) =>{
        this.mapaCTE.inserDir(dir, tipo, name, val);
    }

    getMapaGlobal = (tipo) =>{
        return this.mapaGlobal.getMemoria(tipo);
    }

    getMapaLocal = (tipo) => {
        return this.mapaLocal.getMemoria(tipo);
    }

    getMapaConst = (tipo) =>{
        return this.mapaCTE.getMemoria(tipo)
    }
}

module.exports = manejadorMemoria;
