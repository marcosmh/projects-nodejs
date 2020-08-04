

const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');



getLugarLatLng(argv.direccion)
  .then( console.log )
