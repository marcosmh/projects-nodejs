const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

let guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`./db/data.json`,data, (err) => {
        if(err)
          throw new Error('No se pudo grabar',err);
    });
}

let cargarBD = ()=> {

  try {
      listadoPorHacer = require('../db/data.json');
  } catch(error) {
    listadoPorHacer = [];
  }

}

let crear = (descripcion) => {

    cargarBD();

    let porHacer = {
      descripcion,
      completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}


let getListado = ()=> {
  cargarBD();
  return listadoPorHacer;
}


let crearLista = (descripcion) => {
    return new Promise((resolve,reject) => {
      if(descripcion) {
        reject('Escriba una descripción');
      }
      fs.writeFile(`./archivos/lista-por-hacer.txt`,descripcion+"\n", (err) => {
          if(err)
            reject(err);
          else
            resolve(`lista-por-hacer.txt`);
      });
    });
}


let actualizar = (descripcion,completado = true) => {
      cargarBD();
      console.log("param: "+descripcion);
      let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
      console.log("index: "+index);
      if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
      } else {
        return false;
      }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  crearLista
}
