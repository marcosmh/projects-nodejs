
const argv = require('yargs')
    .command('listar','Imprime en la consola la tabla de multiplicar',{
        base: {
          demand: true,
          alias: 'b'
        },
        limite: {
          alias: 'l',
          default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
let comando = argv._[0];

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
    console.log('crear');
    crearArchivo(argv.base)
      .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
      .catch(err => console.log("Error: ",err));
    break;
  default:
    console.log('Comando no reconocido');
}
