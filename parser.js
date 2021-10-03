var fs = require('fs'); 
var parser = require('./littleDuck');


fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;
    parser.parse(data.toString());
});

A