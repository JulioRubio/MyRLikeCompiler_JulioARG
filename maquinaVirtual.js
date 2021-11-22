let mapaMemoria = require("./mapaMemoria");
let manejadorMemoria = require("./manejadorMemoria")

class maquinaVirtual{
    constructor(codigo){
        this.consoleOutput = {};
        this.funcTable = codigo.funcTable;
        this.cuads = codigo.cuads;
        this.constantes = codigo.constantes;
        this.currIndex = 0;
    }

    performCuadOperation = () =>{
        let cuadFunc = this.cuads[this.currIndex][0];

        switch (cuadFunc){
            case '+':
            case '-':
            case '*': 
            case '/':
            case '>':
            case '<':
            case '>=':
            case '<=':
            case '!=':
            case '==':
            case 'GOTO': 
                this.currIndex = this.cuads[this.currIndex][3];
                break;
            case 'GOTOF':
                let validationDir = this.cuads[this.currIndex][1];

                

                let result = this.cuads[this.currIndex][3];
                this.currIndex = this.cuads[this.currIndex][3];
                break;
            case 'WRITE':
            case 'READ':
            case 'PRINT':
            case 'PARAMETRO':
            case 'ERA':
            case 'GOSUB':
            case 'ENDFUNC':
            case 'END':                      
            default: break;
        }
    }

    resolverCuads = () => {

    }

    
}

module.exports = maquinaVirtual;
