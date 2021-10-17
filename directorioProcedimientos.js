let directorioProcedimientos = class {
    constructor() {
        this.funcTable = new Object;
    }
    
    insertFunc = function(func){
        if (this.funcTable.hasOwnProperty(func.name)){
            console.log("error funcion ya declarada")
        }
        else{
            this.funcTable.func.name = func.name;
        }
    }

    getFunc = function(name){
        return this.funcTable[name];
    }

    getFuncTable  = function(){
        return this.funcTable;
    }
}

export default directorioProcedimientos;