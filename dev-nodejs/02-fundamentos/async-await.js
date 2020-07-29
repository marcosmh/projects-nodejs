//
// let getNombre = async() => {
//   throw new Error('No existe un nombre para este usuario');
//   return 'Marcos';
// }
//
// getNombre().then(nombre =>{
//   console.log(nombre);
// }).catch(e => {
//   console.log("Error",e);
// });


let getNombre = () => {
  return new Promise((resolve,reject)=> {
      setTimeout( () => {
          resolve('Marcos');
      },3000)
  });
}


let saludo = async () => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
}


getNombre().then(nombre =>{
 //console.log(nombre);
}).catch(e => {
 console.log("Error",e);
});



saludo().then(mensaje => {
    console.log(mensaje);
});
