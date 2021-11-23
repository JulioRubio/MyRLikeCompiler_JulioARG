var fs = require('fs'); 
var parser = require('./lexer');
var maquinaVirtual = require('./maquinaVirtual')


fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    let compiler = parser.parse(data.toString());
    let mv = new maquinaVirtual(compiler)
    mv.resolverCuads()
});
