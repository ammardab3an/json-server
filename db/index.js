const groups = [
    'c_python',
    'c_excel',
    'c_web',
    'c_js',
    'c_data',
    'c_aws',
    'c_draw',
];

let exp = {};

for(const group of groups){
    exp[group] = require(`./${group}.json`);
}

module.exports = exp;