let tablaVariables = class {
    constructor() {
        this.varsTable = new Object;
    }
    
    insertVar = (vars) =>{
        if (this.varsTable.hasOwnProperty(vars.name)){
            console.log("error funcion ya declarada")
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



export default tablaVariables;