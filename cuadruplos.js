//clase de cuadruplos, su objectivo es dar de alta un nuevo objecto llamada cuads, el cual guardara arreglos que contienen 4 casillas en donde la primera casilla es oper
//seguido de opL, opR y res al final. Guarda los cuadruplos de ejecución que son alimentados a la maquina virtual. 
let cuadruplo = class {
    constructor() {
        this.cuads = new Object();
        this.counter = 0;
    }


    //agrega un nuevo cuadruplo recibiendo como parametros los valores del arreglo, y creando un nuevo cuadruplo con este arreglo para agregarlo al objecto de arreglos
    //utiliza el numero de un contador para asignar la llave del arreglo creado, de este modo podremos acceder a el conociendo la posicion (numero cuadruplo) 
    insertCuad = ([oper, opL, opR, res]) => {  
        let c = [oper, opL, opR, res]
        this.cuads[this.counter] = c;
        this.counter += 1;
    }

    //cuadruplos como GOTO son creados esperando poder regresar a llenarlos, esta función realiza ese objectivo donde dado un numero de cuadruplo y un valor
    //se llena el cuadruplo.
    fillCuad = (expPos, endPos) => {
        this.cuads[expPos][3] = endPos
    }

    //regresa cuadruplos
    getCuads = () => {
        return this.cuads
    }
}

module.exports = cuadruplo

// let c = new cuadruplo();
// let counterT = 0;

// c.insertCuad(['+','a','b',`t${counterT}`])
// counterT += 1;
// c.insertCuad(['*','t0','x',`t${counterT}`])
// counterT += 1;
// c.insertCuad(["GOTOF",'','',''])
// c.fillCuad(2, 8)


// console.log(c.cuads);
