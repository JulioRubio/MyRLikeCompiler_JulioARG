
class mapaMemoria{
    constructor (tipoMemoria, dirInicio, dirFin){
        //global, local, temp, const
        this.tipoMemoria = tipoMemoria;

        //example
        //[1000 ........ 9999]
        // 9999 - 1000 = 8000
        this.dirInicio = dirInicio;
        this.dirFin = dirFin - 1;

        this.size = this.dirFin - this.dirInicio;


        //int, float, char
        this.sizeFragmento = this.size / 3;

        //console.log(this.sizeFragmento);

        this.intDirInicio =  dirInicio;
        this.intFin = dirInicio + this.sizeFragmento - 1;

        // console.log("------------------------------------------");
        // console.log("DIR INT");

        // console.log("DIR INICIO", this.intDirInicio);
        // console.log("DIR FIN", this.intFin);


        this.floatDirInicio = dirInicio +  this.sizeFragmento;
        this.floatFin = dirInicio +  this.sizeFragmento * 2 - 1;

        // console.log("------------------------------------------");


        // console.log("DIR INT");
        
        // console.log("DIR INICIO", this.floatDirInicio);
        // console.log("DIR FIN", this.floatFin);


        this.charDirInicio = dirInicio +  this.sizeFragmento * 2;
        this.charFin = this.dirFin;

        // console.log("------------------------------------------");


        // console.log("DIR INT");
        
        // console.log("DIR INICIO", this.charDirInicio);
        // console.log("DIR FIN", this.charFin);


        //
        this.intPointer = this.intDirInicio;
        this.floatPointer = this.floatDirInicio;
        this.charPointer = this.charDirInicio;

        //
        this.memoriaInt = new Object();
        this.memoriaFloat = new Object();
        this.memoriaChar = new Object();
    } 

    inserDir = (tipo, name, val) =>{
        switch (tipo){
            case 'int':{
                this.memoriaInt[this.intPointer] = [tipo, name, val];
                
                break;
            }
            case 'float':{
                this.memoriaFloat[this.floatPointer] = [tipo, name, val];
                break;
            }
            case 'char':{
                this.memoriaChar[this.charPointer] = [tipo, name, val];
                break;
            }
        }
    }

    updateVal = (tipo, dir, val) => {
        switch (tipo){
            case 'int':{
            }
            case 'float':{
            }
            case 'char':{
            }
        }
    }

    getVal = (tipo, dir) =>{
        switch (tipo){
            case 'int':{
                return this.memoriaInt[dir];
            }
            case 'float':{
                return this.memoriaFloat[dir];
            }
            case 'char':{
                return this.memoriaChar[dir];
            }
        }
    }

    getPointer = (tipo) =>{
        let pointer;
        switch (tipo){
            case 'int':{
                pointer = this.intPointer;
                this.intPointer += 1;
                return pointer;
                
            }
            case 'float':{
                pointer = this.floatPointer;
                this.floatPointer += 1;
                return pointer;
            }
            case 'char':{
                pointer = this.charPointer;
                this.charPointer += 1;
                return pointer;
            }
        }
    }

    getMemoria = (tipo) => {
        switch (tipo){
            case 'int':{
                return this.memoriaInt
                
            }
            case 'float':{
                return this.memoriaFloat
            }
            case 'char':{
                return this.memoriaChar
            }
        }
    }
}

module.exports = mapaMemoria;
// let global = new mapaMemoria('GLOBAL', 1000, 8000);
// let local = new mapaMemoria('LOCAL', 8000, 18000);
// let temp = new mapaMemoria('TEMP', 18000, 28000);
// let cte = new mapaMemoria('CONST', 28000, 38000);

// global.inserDir('int',1001, 10);

// console.log(global);

