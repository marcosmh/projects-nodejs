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


let getEmpleado = async (id) => {
        let empleadoDB = await empleados.find(empleado => empleado.id === id);
        if(!empleadoDB) {
          throw new Error(`No existe un empleado con el ID: ${id}`);
        } else {
          return empleadoDB;
        }
}


let getSalario = async (empleado) => {
      let empleadoDB      = await empleados.find(nombreEmpleado => nombreEmpleado.nombre === empleado);
      let salarioEmpleado = await salarios.find(salario => salario.id === empleadoDB.id);
      if(!empleadoDB) {
        throw new Error(`No existe un empleado con el nombre de: ${empleado}`);
      } else if(!salarioEmpleado) {
        throw new Error(`No se encontro un salario para el usuario: ${empleado}`);
      } else {
        let objetoEmpleado = { nombre: empleadoDB.nombre, salario: salarioEmpleado.salario };
        return(objetoEmpleado);
      }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado.nombre);
    return (`El salario de ${salario.nombre} es de $ ${salario.salario}`);
}

getInformacion(1)
  .then( mensaje => console.log(mensaje))
  .catch(err => console.log(err));
