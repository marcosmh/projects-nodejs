const argv = require('./config/yargs').argv;

const colors = require('colors');

//node app crear -d "Hacer algo"
//node app listar
//node app actualizar -d "Hacer algo" -c true

console.log("argumentos: " +  JSON.stringify(argv));

const comando = argv._[0];

console.log("comando: "+comando);

switch (comando) {
  case 'listar':
    console.log('listar');
    break;
  case 'crear':
    console.log('crear');
    break;
  case 'actualizar':
    console.log('actualizar');
    break;
  default:
      console.log('No se encontro el comando'.red);

}
