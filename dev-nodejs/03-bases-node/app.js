
const argv = require('yargs').
    command('listar','Imprime en la consola la tabla de multiplicar',{
        base: {
          demand: true,
          alias: 'b'
        }
    })
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar.js');

//console.log(process.argv);
// node app --base10

//let argv      = process.argv;
//let parametro = argv[2];
//let base      = parametro.split("=")[1] ? parametro.split("=")[1] === undefined : "error";

console.log(base);

crearArchivo(base)
  .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
  .catch(err => console.log("Error: ",err));
