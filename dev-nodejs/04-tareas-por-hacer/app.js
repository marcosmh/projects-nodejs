const argv = require('./config/yargs').argv;

const colors = require('colors');

//node app crear -d "Hacer algo"
//node app listar
//node app actualizar -d "Hacer algo" -c true

console.log("argumentos: " +  JSON.stringify(argv));

const { crear, getListado, actualizar, borrar, crearLista } = require('./por-hacer/por-hacer');
const comando = argv._[0];

console.log("comando: "+comando);

switch (comando) {
  case 'listar':
    console.log('listar');
    let listado = getListado();
    for(let tarea of listado) {
      console.log("===========Por Hacer==========".green);
      console.log(tarea.descripcion);
      console.log("Estado: ",tarea.completado);
      console.log("==============================".green);
    }
    break;
  case 'crear':
    console.log('crear');
      let tarea = crear(argv.descripcion);
      console.log("tarea: "+tarea);
    break;
  case 'actualizar':
    console.log('actualizar');
    let actualizado = actualizar(argv.descripcion,argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    console.log('borrar==>');
    let borrado = borrar(argv.descripcion);
    console.log("eliminado: "+borrado);
    break;
  default:
      console.log('No se encontro el comando'.red);

}
