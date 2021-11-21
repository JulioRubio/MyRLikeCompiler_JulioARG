let mapaMemoria = require("./mapaMemoria");
let manejadorMemoria = require("./manejadorMemoria")

class maquinaVirtual{
    constructor(codigo){
        this.consoleOutput = ""
        this.memoria = new manejadorMemoria();
        this.funcTable = codigo.funcTable;
        this.cuads = codigo.cuads;
        this.constants = codigo.constants;
        this.currIndex = 0;

        
    }

    resolverCuads = () => {
        
    }
}

module.exports = maquinaVirtual;
