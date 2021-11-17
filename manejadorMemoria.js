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

    inserGlobal = (tipo, name, val) => {
        this.mapaGlobal.inserDir(tipo, name, val)
    }

    inserLocal = (tipo, name, val) => {
        this.mapaLocal.inserDir(tipo, name, val)
    }

    updateLocal = (tipo, dir, val) =>{
        this.mapaLocal.updateVal(tipo, dir, val)
    }

    getMapaGlobal = (tipo) =>{
        return this.mapaGlobal.getMemoria(tipo);
    }

    getMapaLocal = (tipo) => {
        return this.mapaLocal.getMemoria(tipo);
    }
}

module.exports = manejadorMemoria;
