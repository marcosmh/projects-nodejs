const http = require('http');

http.createServer( (req,res) => {
  //res.write('Hola Mundo desde Node JS');

  res.writeHead(200,{'Content-Type': 'application/json'});

  let salida = {
      nombre: 'Marcos',
      apellido: 'Magaña',
      url: req.url
  }

  res.write(JSON.stringify(salida));

  res.end();


})
.listen(8080);



console.log('Escuchando con el puerto 8080');
