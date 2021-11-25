var fs = require('fs'); 
var parser = require('./lexer');
var maquinaVirtual = require('./maquinaVirtual')

const ps = require("prompt-sync")
const prompt = ps();


//parser, toma un filename para tokenizar codigo dentro de archivo
let name = prompt("File name   ");

fs.readFile(`./TESTS/${name}.txt`, (err, data) => {
    if (err) throw err;
    let compiler = parser.parse(data.toString());
    let mv = new maquinaVirtual(compiler)
    mv.resolverCuads()
});
