const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname +  '/public'));

//Express HBS Engine

hbs.registerPartials(__dirname +  '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

  res.render('home',{
    nombre: 'Marcos',
    anio: new Date().getFullYear()
  });

});

app.get('/about', (req, res) => {
  res.render('about',{
    anio: new Date().getFullYear()
  });
});

app.listen(3000, ()=> {
  console.log('Escuchando en el puerto: 3000');
});
