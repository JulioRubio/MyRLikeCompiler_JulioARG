let tablaVariables = class {
    constructor() {
        this.varsTable = new Object;
    }
    
    insertFunc = function(vars){
        if (this.varsTable.hasOwnProperty(vars.name)){
            console.log("error funcion ya declarada")
        }
        else{
            this.varsTable.vars.name = vars.name;
        }
    }

    getFunc = function(name){
        return this.varsTable[name];
    }

    getCarsTable  = function(){
        return this.varsTable;
    }
}

export default tablaVariables;