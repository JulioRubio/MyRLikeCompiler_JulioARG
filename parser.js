var fs = require('fs'); 
var parser = require('./lexer');


fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    parser.parse(data.toString());
});
