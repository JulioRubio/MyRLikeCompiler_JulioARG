
class mapaMemoria{
    constructor (tipo, dirInicio, dirFin){

        this.num = 3;

        if(tipo == 'TEMP' || tipo == 'CONST'){
            this.num = 4;
        }

        console.log(tipo, this.num)

        //example
        //[1000 ........ 9999]
        // 9999 - 1000 = 8000
        this.dirInicio = dirInicio;
        this.dirFin = dirFin - 1;

        this.size = this.dirFin - this.dirInicio;


        //int, float, char
        this.sizeFragmento = Math.ceil(this.size / this.num);

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


        // console.log("DIR FLOAT");

        // console.log("DIR INICIO", this.floatDirInicio);
        // console.log("DIR FIN", this.floatFin);


        this.charDirInicio = dirInicio +  this.sizeFragmento * 2;
        this.charFin = this.dirFin;

        // console.log("------------------------------------------");


        // console.log("DIR CHAR");

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


        if(tipo == 'TEMP' || tipo == 'CONST'){

            this.charDirInicio = dirInicio +  this.sizeFragmento * 2;
            this.charFin = dirInicio +  this.sizeFragmento * 3 - 1;

            this.extDirInicio = dirInicio +  this.sizeFragmento * 3;
            this.extFin = this.dirFin;

            // console.log("------------------------------------------");


            // console.log("NEW DIR CHAR");

            // console.log("DIR INICIO", this.charDirInicio);
            // console.log("DIR FIN", this.charFin);

            // console.log("------------------------------------------");


            // console.log("DIR EXT");

            // console.log("DIR INICIO", this.extDirInicio);
            // console.log("DIR FIN", this.extFin);

            this.charPointer = this.charDirInicio;
            this.extPointer = this.extDirInicio;
            this.memoriaExt = new Object();
        }

    }




    inserDir = (dir, tipo, name, val) =>{
        switch (tipo){
            case 'int':{
                this.memoriaInt[dir] = [tipo, name, val];
                break;
            }
            case 'float':{
                this.memoriaFloat[dir] = [tipo, name, val];
                break;
            }
            case 'char':{
                this.memoriaChar[dir] = [tipo, name, val];
                break;
            }
            default:{
                this.memoriaExt[dir] = [tipo, name, val];
            }
        }
    }

    updateVal = (tipo, dir, val) => {
        // console.log(tipo, dir);
        let memory = this.getVal(tipo, dir);
        // console.log(memory)
        switch (tipo){
            case 'int':{
                this.memoriaInt[dir] = [tipo, memory[1], val];
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
            default:{
                return this.memoriaExt[dir];
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
            default:{
                pointer = this.extPointer;
                this.extPointer += 1;
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
            default:{
                return this.memoriaExt
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

