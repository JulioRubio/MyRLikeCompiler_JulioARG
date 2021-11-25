
/* mapa de memoria se encarga de crear los cautro objectos (en caso de temp, const) o tres (local, global) donde se encuentra segmentada en distintos objectos que sirven como
contenedores, a traves de esta clase se generan todas las operaciones hechas hacia la memoria ya sean en ejecucion o compilacion*/
class mapaMemoria{
    /*este constructor recibe un tipo que solo es utilizado para decidir si se segmenta en 4 o 3 en caso de ser cuatro la memoria extra recibe el nombre de ext que es extra
    utilizando la direccion inicio y fin se encuentra el tamaño y con este tamaño se divide en el numero de segmentos y se asigna el primer bloque a enteros, seguido de flotantes
    seguido de temporales y al final constantes. Se crea un apuntador al primer indicio de la memoria que sera utilizado para llevar control de los espacios ya utilizados*/
    constructor (tipo, dirInicio, dirFin){

        this.num = 3;

        this.pointerArr = [];

        if(tipo == 'TEMP' || tipo == 'CONST'){
            this.num = 4;
        }

       //console.log(tipo, this.num)

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
        // console.log(tipo);
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

    //inserta una nueva direccion de memoria a la memoria correspondiente al tipo de dato que es recibido
    //guardando un arreglo que contiene en la casilla cero el tipo, en la 1 el nombre y en la dos el valor
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

    /*actualiza un valor a un espacio de memoria ya definido dependiendo al tipo, esto es utilizado principalmente en ejecucion */
    updateVal = (tipo, dir, val) => {

        //console.log(tipo, dir, val) 
        // console.log(tipo, dir);
        let memory = this.getVal(tipo, dir);
        // console.log(memory)
        switch (tipo){
            case 'int':{
                this.memoriaInt[dir] = [tipo, memory[1], val];
                break;
            }
            case 'float':{
                this.memoriaFloat[dir] = [tipo, memory[1], val];
                break;

            }
            case 'char':{
                this.memoriaChar[dir] = [tipo, memory[1], val];
                break;

            }
            default: {
                this.memoriaExt[dir] = [tipo, memory[1], val];
                break;

            }
        }
    }
    /*dado un tipo y direccion regresa un valor encontrado en la casilla dos del arreglo */
    getVal = (tipo, dir) =>{
        switch (tipo){
            case 'int':{
                return this.memoriaInt[dir][2];
            }
            case 'float':{
                return this.memoriaFloat[dir][2];
            }
            case 'char':{
                return this.memoriaChar[dir][2];
            }
            default:{
                return this.memoriaExt[dir][2];
            }
        }
    }

    /*dado un tamaño y un scope regresa un tipo, el scope es utilizado simplementa para 
    que no se regrese ext sino el tipo que los valores guardados en ext pertenecen bool para temps y stirngs para consts */
    getType = (dir, scope) =>{
        switch(true){
            case (dir < this.intFin): 
                return 'int';
            case (dir < this.floatFin): 
                return 'float';
            case (dir < this.charFin): 
                return 'char';
            default:
                if(scope == 'TEMP'){
                    return 'bool';
                }
                return 'string';
        }
    }
    
    /*regresa el pointer siguiente a utilizar dado un tipo */
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

    /*regresa un set de pointers a utilizar dado un tipo y un tamaño para indicar cuandos regresar, esta funcion se usa para arreglos */
    getPointers = (tipo, tam) =>{
        let i = 0;
        switch (tipo){
            case 'int':{
                while (i < tam){
                    this.pointerArr[i] = this.intPointer;
                    this.intPointer += 1;
                    i+=1

                }
                return this.pointerArr;
            }
            case 'float':{
                while (i < tam){
                    this.pointerArr[i] = this.floatPointer;
                    this.floatPointer += 1;
                    i+=1
                }
                return this.pointerArr;
            }
            case 'char':{
                while (i < tam){
                    this.pointerArr[i] = this.charPointer;
                    this.charPointer += 1;
                    i+=1

                }
                return this.pointerArr;
            }
            default:{
                while (i < tam){
                    this.pointerArr[i] = this.extPointer;
                    this.extPointer += 1;
                    i+=1

                }
                return this.pointerArr;
            }
        }
    }

    /*regreas la memoria, uso principal debuggig */
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

