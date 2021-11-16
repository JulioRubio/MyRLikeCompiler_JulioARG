let cuadruplo = class {
    constructor() {
        this.cuads = new Object();
        this.oper = 0;
        this.opL = 0;
        this.opR = 0;
        this.res = 0;
        this.counter = 0;
    }

    insertCuad = ([oper, opL, opR, res]) => {  
        this.oper = oper;
        this.opL = opL;
        this.opR = opR;
        this.res = res;
        let c = [oper, opL, opR, res]
        this.cuads[this.counter] = c;
        this.counter += 1;
    }

    fillCuad = (expPos, endPos) => {
        this.cuads[expPos][3] = endPos
    }

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
