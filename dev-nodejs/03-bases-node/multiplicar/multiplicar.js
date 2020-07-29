const fs = require('fs');

let crearArchivo = (base) => {
    console.log("base: "+base);
    return new Promise((resolve,reject) => {

        if(!Number(base)) {
          reject(`El valor introducido ${base} no es un número`);
          return;
        }

        let contenido = '';

        for(let i = 1; i <= 10; i++) {
            console.log(`${i} * ${base} =`,i * base);
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
  crearArchivo
}
