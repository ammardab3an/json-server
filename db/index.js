
const exp = {};

const fs = require('fs');
const files = fs.readdirSync('./db');

files.forEach(file => {
    if(file.substr(-5)==='.json'){
        exp[file.slice(0, -5)] = require('./' + file);
    }
})

module.exports = exp;