//
// setTimeout( () => {
//     console.log("Hola Mundo");
// },3000);


let getUsuarioById = (id, callback) => {
   let usuario = {
     nombre: 'Marcos',
     id: id
   }

   if(id === 20) {
     callback(`El usuario con id ${id}, no existe en la base de datos`);
   } else {
     callback(null,usuario);
   }
}


getUsuarioById(10,(err,usuario)=> {
  if(err) {
    return console.log(err);
  }
  console.log('usuario de base de datos: ',usuario);
});
