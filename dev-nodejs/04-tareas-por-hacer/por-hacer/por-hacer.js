const fs = require('fs');
const colors = require('colors');


let crearLista = (descripcion) => {
    return new Promise((resolve,reject) => {

      if(descripcion) {
        reject('Escriba una descripción');
      }
      
        fs.writeFile(`./archivos/lista-por-hacer.txt`,descripcion, (err) => {
            if(err)
              reject(err);
            else
              resolve(`lista-por-hacer.txt`);
        });

    });
}

module.exports = {
  crearLista
}
