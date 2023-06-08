// import * as fs from 'node:fs/promises';
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs').argv;

console.clear();

// const base = 6;

// console.log(process.argv);

// yargs es un paquete que esta obtimizado para la recepcion de datos desde consola, si enviarmos node app --base=
console.log(argv);
console.log('base: ' , argv.base);
const base = argv.base;


//############## una forma de recibir datos de la terminal ########### (node app.js --base=5) 
// const [,,argv = 'base=5'] = process.argv;
// const [,base] = arg3.split('=');

crearArchivo(base, 15)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

