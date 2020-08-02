const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

  console.log('========================================'.green);
  console.log(`Lista de la Tabla del Núm. ${base}`.green);
  console.log('========================================'.green);

  return new Promise((resolve,reject) => {

    if(!Number(base)) {
      reject(`El valor introducido ${base} no es un número`.red);
      return;
    }

    if(!Number(limite)) {
      reject(`El valor introducido ${limite} no es un número`.red);
      return;
    }

    for(let i = 1; i <= limite; i++) {
        //console.log(`${i} * ${base} =`,i * base);
        //resolve += `${i} * ${base} =`,i * base;
        console.log(`${i} * ${base} = ${ i * base}`.yellow);
        resolve += `${i} * ${base} = ${ i * base} \n`;
    }


  });


}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve,reject) => {

        if(!Number(base)) {
          reject(`El valor introducido ${base} no es un número`.red);
          return;
        }

        let contenido = '';

        for(let i = 1; i <= limite; i++) {
            //console.log(`${i} * ${base} =`,i * base);
            console.log(`${i} * ${base} = ${ i * base} `.yellow);
            contenido += `${i} * ${base} = ${ i * base} \n`;
        }

        fs.writeFile(`archivos/tabla-${base}.txt`,contenido, (err) => {
            if(err)
              reject(err)
            else
              resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
  crearArchivo,
  listarTabla
}
