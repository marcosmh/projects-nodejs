

const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const getInfo = async (direccion) => {

  try {
    const coordenadas = await getLugarLatLng(direccion);
    const temperatura = await getClima(coordenadas.lat, coordenadas.lng);
    return `El clima de ${coordenadas.direccion} es de ${temperatura}`
  } catch(e) {
     return `No se pudo determinar el clima de ${direccion}`;
  }

}


getInfo(argv.direccion)
  .then( clima => console.log(clima) )
  .catch( err =>  console.log(err) );
