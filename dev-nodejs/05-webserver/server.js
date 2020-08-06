const express = require('express');
const app = express();


app.use(express.static(__dirname +  '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

  res.render('home',{
    nombre: 'Marcos',
    anio: new Date().getFullYear()
  });

});

app.listen(3000, ()=> {
  console.log('Escuchando en el puerto: 3000');
});
