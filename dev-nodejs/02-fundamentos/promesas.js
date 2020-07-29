let empleados = [{
  id: 1,
  nombre: 'Marcos'
},{
  id: 2,
  nombre: 'Fernando'
},{
  id:3,
  nombre: 'Juan'
}];

let salarios = [{
  id: 1,
  salario: 1000
},{
  id: 2,
  salario: 2000
}];


let getEmpleado = (id) => {
    return new Promise( (resolve,reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if(!empleadoDB) {
          reject(`No existe un empleado con el ID: ${id}`);
        } else {
          resolve(empleadoDB);
        }
    });
}


let getSalario = (empleado) => {

  return new Promise((resolve,reject) => {

    let empleadoDB = empleados.find(nombreEmpleado => nombreEmpleado.nombre === empleado);
    let salarioEmpleado = salarios.find(salario => salario.id === empleadoDB.id);

    if(!empleadoDB) {
      reject(`No existe un empleado con el nombre de: ${empleado}`);
    } else if(!salarioEmpleado) {
      reject(`No se encontro un salario para el usuario: ${empleado}`);
    } else {
      let objetoEmpleado = { nombre: empleadoDB.nombre, salario: salarioEmpleado.salario };
      resolve(objetoEmpleado);
    }
  });

}

getEmpleado(3).then( empleado => {
     //console.log("El empleado: ",empleado);
     getSalario(empleado.nombre).then(data => {
       //console.log("El empleado con salario: ",data);
       console.log(`El salario de ${data.nombre} es de $ ${data.salario}`);
     },(err)=>{
       console.log("Error Salario: ",err);
     });
},(err) => {
  console.log("Error Empleado: ",err);
});



/*
getSalario('Marcos').then(empleado => {
  console.log("El empleado con salario: ",empleado);
  console.log(`El salario de ${empleado.nombre} es de $ ${empleado.salario}`);
},(err)=>{
  console.log("Error: ",err);
});


*/
