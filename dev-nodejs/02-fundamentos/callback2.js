
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


let getEmpleado = (id,callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB) {
      callback(`No existe un empleado con el ID: ${id}`);
    } else {
      callback(null,empleadoDB);
    }

    if(empleadoDB !== undefined) {
        //console.log("data: "+JSON.stringify(empleadoDB));
    }

}

let getSalario = (empleado, callback) => {

  let empleadoDB = empleados.find(nombreEmpleado => nombreEmpleado.nombre === empleado);
  let salarioEmpleado = salarios.find(salario => salario.id === empleadoDB.id);

  //console.log(empleadoDB.id);
  //console.log("data: "+JSON.stringify(salarioEmpleado));
  //console.log("data: "+JSON.stringify(empleadoDB));

  if(!empleadoDB) {
    callback(`No existe un empleado con el nombre de: ${empleado}`);
  } else if(!salarioEmpleado) {
    callback(`No se encontro un salario para el usuario: ${empleado}`);
  } else {
    let objetoEmpleado = { nombre: empleadoDB.nombre, salario: salarioEmpleado.salario };
    callback(null,objetoEmpleado);
  }

  if(empleadoDB !== undefined ) {
      //console.log("dataEmpleado: "+JSON.stringify(empleadoDB));
      if(salarioEmpleado !== undefined) {
          //console.log("dataSalario: "+JSON.stringify(salarioEmpleado));
      }
  }

}


getEmpleado(1,(err,empleado) => {
  if(err) {
    return console.log(err);
  }

  ///console.log(empleado);

  getSalario(empleado.nombre,(err,data) => {
    if(err) {
      return console.log(err);
    }
    console.log(`El salario de ${data.nombre} es de $ ${data.salario}`);
  });



});



/*
getSalario('Marcos',(err,empleado) => {
  if(err) {
    return console.log(err);
  }
  console.log(`El salario de ${empleado.nombre} es de $ ${empleado.salario}`);
});
*/
