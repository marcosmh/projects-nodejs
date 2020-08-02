
const argv = require('./config/yargs').argv;

console.log(JSON.stringify(argv));

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];


console.log("comando: "+JSON.stringify(comando));

//console.log(process.argv);
// node app --base10
//let argv      = process.argv;
//let parametro = argv[2];
//let base      = parametro.split("=")[1] ? parametro.split("=")[1] === undefined : "error";


switch(comando) {
  case 'listar':
    console.log(`Lista de la Tabla del Núm. ${argv.base}`);
    listarTabla(argv.base,argv.limite)
      .then(listar => console.log(listar))
      .catch(err => console.log('Error'));
    break;
  case 'crear':
    console.log(`Crear Archivo con la Tabla del Núm. ${argv.base}`);
    crearArchivo(argv.base,argv.limite)
      .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
      .catch(err => console.log("Error: ",err));
    break;
  default:
    console.log('Comando no reconocido');
}
