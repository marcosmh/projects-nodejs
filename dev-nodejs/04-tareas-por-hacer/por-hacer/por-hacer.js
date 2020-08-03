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

module.exports = {
  crear,
  crearLista
}
