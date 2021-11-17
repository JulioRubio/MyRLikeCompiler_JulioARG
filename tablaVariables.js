let tablaVariables = class {
    constructor() {
        this.varsTable = new Object();
    }
    
    insertVar = (name, vars) =>{
        if (this.varsTable.hasOwnProperty(name)){
            throw new Error(`${name} ya ha sido declarada`)
        }
        else{
            this.varsTable[name] = vars;
        }
    }

    getVar = (name) => {
        return this.varsTable[name];
    }

    getVarType = (name) => {
        let Var = this.varsTable[name];
        if (Var == undefined){
            return undefined
        }
        return this.varsTable[name].tipo;
    }

    getVarDir = (name) => {
        let Var = this.varsTable[name];
        if (Var == undefined){
            return undefined
        }
        return this.varsTable[name].dir;
    }

    getVarsTable  = () =>{
        return this.varsTable;
    }
}

module.exports = tablaVariables;
