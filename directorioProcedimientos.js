let directorioProcedimientos = class {
    constructor() {
        this.funcTable = new Object;
    }

    insertFunc = (func) => {
        if (this.funcTable.hasOwnProperty(func.name)){
            console.log("error funcion ya declarada")
        }
        else{
            this.funcTable.func.name = func;
        }
    }

    getFunc = (name) =>{
        return this.funcTable[name];
    }

    getFuncTable  = () => {
        return this.funcTable;
    }
}

export default directorioProcedimientos;