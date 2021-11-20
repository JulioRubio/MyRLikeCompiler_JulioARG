let tablaVariables = require("./tablaVariables");

let directorioProcedimientos = class {
    constructor() {
        this.funcTable = new Object();
    }

    insertFunc = (func) => {
        if (this.funcTable.hasOwnProperty(func.name)){
            throw new Error(`funcion ${func.name} ya ha sido declarada`)
        }
        else{
            this.funcTable[func.name] = func;
        }
    }

    addToFunc = (name, func) =>{
        this.funcTable[func.name] = func;
    }

    getFunc = (name) =>{
        if (!this.funcTable.hasOwnProperty(name)){
            throw new Error(`funcion ${name} no ha sido declarada!`)
        }
        return this.funcTable[name];
    }

    getFuncTable  = () => {
        return this.funcTable;
    }
}



module.exports = directorioProcedimientos;
