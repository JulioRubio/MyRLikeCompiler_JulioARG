//este directorio de procedimientos se encarga de crear y guardar en un objeto la informacion de cada una de las funciones que son creadas por el programa
let tablaVariables = require("./tablaVariables");

let directorioProcedimientos = class {
    constructor() {
        this.funcTable = new Object();
    }

    /*agrega una nueva funcion a la tabla de funciones, esta es llamada cada vez que una nueva funcion es declarada*/
    insertFunc = (func) => {
        if (this.funcTable.hasOwnProperty(func.name)){
            throw new Error(`funcion ${func.name} ya ha sido declarada`)
        }
        else{
            this.funcTable[func.name] = func;
        }
    }

    /*se agrega data extra a la funcion, muy importante mencionar que lo que es contenido en func puede incluir directorio de variables, contadores de parametros, 
    contador de variables y todo esto es guardado con la llame del nombre de la funcion*/
    addToFunc = (name, func) =>{
        this.funcTable[func.name] = func;
    }

    /*regresa una funcion y todo su data dado un nombre de funcion, valida que la funcion buscada exista sino marca error. Esta funcion es utilizada para hacer una llamada
    por ejemplo*/
    getFunc = (name) =>{
        if (!this.funcTable.hasOwnProperty(name)){
            throw new Error(`funcion ${name} no ha sido declarada!`)
        }
        return this.funcTable[name];
    }

    /*regresa toda la tabla con todas las funciones declaradas en ella*/
    getFuncTable  = () => {
        return this.funcTable;
    }
}



module.exports = directorioProcedimientos;
