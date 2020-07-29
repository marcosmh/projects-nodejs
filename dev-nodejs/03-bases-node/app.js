

const { crearArchivo } = require('./multiplicar/multiplicar.js');

let base  = "aaa";

crearArchivo(base)
  .then(archivo => console.log(`El archivo ${archivo} ha sido creado.`))
  .catch(err => console.log("Error: ",err));
