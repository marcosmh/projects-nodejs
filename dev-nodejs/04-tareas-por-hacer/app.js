const argv = require('./config/yargs').argv;

const colors = require('colors');

//node app crear -d "Hacer algo"
//node app listar
//node app actualizar -d "Hacer algo" -c true

console.log("argumentos: " +  JSON.stringify(argv));

const { crear, crearLista } = require('./por-hacer/por-hacer');
const comando = argv._[0];

console.log("comando: "+comando);

switch (comando) {
  case 'listar':
    console.log('listar');
    break;
  case 'crear':
    console.log('crear');
    /*crearLista(argv.descripcion)
      .then(archivo => console.log(`Archivo ${archivo} ha sido creado.`.green))
      .catch(err => console.log(err.red));*/

      let tarea = crear(argv.descripcion);
      //
      console.log("tarea: "+tarea);


    break;
  case 'actualizar':
    console.log('actualizar');
    break;
  default:
      console.log('No se encontro el comando'.red);

}
