let tablaVariables = class {
    constructor() {
        this.varsTable = new Object();
    }
    
    insertVar = (vars) =>{
        if (this.varsTable.hasOwnProperty(vars.name)){
            throw new Error(`${vars.name} ya ha sido declarada`)
        }
        else{
            this.varsTable[vars.name] = vars;
        }
    }

    getVar = (name) => {
        return this.varsTable[name];
    }

    getVarsTable  = () =>{
        return this.varsTable;
    }
}

module.exports = tablaVariables;
