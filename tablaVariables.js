/*esta tabla de variables se encarga de crear y guardar en un objeto la informacion de cada una de las variables que son creadas por el programa
estas tablas se encuentran dentro de cada directorio de procedimientos*/
let tablaVariables = class {
    constructor() {
        this.varsTable = new Object();
    }
    

    /*agrega una nueva variable a la tabla de varialbes, esta es llamada cada vez que una nueva variable es declarada*/
    insertVar = (name, vars) =>{
        if (this.varsTable.hasOwnProperty(name)){
            throw new Error(`${name} ya ha sido declarada`)
        }
        else{
            this.varsTable[name] = vars;
        }
    }

    /*se agrega toda la informacion de la variable, la cual es el tipo y su direccion*/
    getVar = (name) => {
        return this.varsTable[name];
    }

    /*dado un nombre regresa el tipo asignado a esa variable*/ 
    getVarType = (name) => {
        let Var = this.varsTable[name];
        if (Var == undefined){
            return undefined
        }
        return this.varsTable[name].tipo;
    }

    /*dato un nombre regresa la direccion asignada a esa variable*/
    getVarDir = (name) => {
        let Var = this.varsTable[name];
        if (Var == undefined){
            return undefined
        }
        return this.varsTable[name].dir;
    }
    /*regresa la tabla de variables con todas las variables*/
    getVarsTable  = () =>{
        return this.varsTable;
    }
}

module.exports = tablaVariables;
