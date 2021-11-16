
class mapaMemoria{
    constructor (tipoMemoria, dirInicio, dirFin){
        //global, local, temp, const
        this.tipoMemoria = tipoMemoria;

        //[1000 ........ 9999]
        // 9999 - 1000 = 8000
        this.dirInicio = dirInicio;
        this.dirFin = dirFin - 1;
        this.size = this.dirFin - this.dirInicio;

        //int, float, char
        this.sizeFragmento = Math.ceil(this.size / 3);

        //
        this.intDirInicio =  dirInicio;
        this.intFin = this.sizeFragmento - 1;

        this.floatDirInicio = this.sizeFragmento;
        this.floatFin = this.sizeFragmento * 2 - 1;

        this.charDirInicio = this.sizeFragmento * 2;
        this.charFin = this.dirFin;

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
                this.memoriaInt[name] = val;
                break;
            }
            case 'float':{
                this.memoriaFloat[name] = val;
                break;
            }
            case 'char':{
                this.memoriaChar[name] = val;
                break;
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

