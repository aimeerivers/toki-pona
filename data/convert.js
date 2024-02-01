const yaml = require('js-yaml');
const fs = require('fs');

const data = fs.readFileSync('./data/lessons.yml', 'utf8');
const yamlData = yaml.load(data);
const jsonData = JSON.stringify(yamlData, null, 2);
fs.writeFileSync('./js/data/lessons.js', `const data = ${jsonData}\n`, 'utf8');
