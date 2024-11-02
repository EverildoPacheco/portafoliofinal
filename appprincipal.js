const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));




// app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname + '/views/partials')

// app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contacto', (req, res) => {
  res.render('contacto');
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades');
});

app.get('/estudios', (req, res) => {
  res.render('estudios');
});

app.get('/proyecto', (req, res) => {
  res.render('proyecto');
});

app.get('/proyecto1', (req, res) => {
    res.render('proyecto1');
  });

  app.get('/proyecto2', (req, res) => {
    res.render('proyecto2');
  });

  app.get('/proyecto3', (req, res) => {
    res.render('proyecto3');
  });

  app.get('/proyecto4', (req, res) => {
    res.render('proyecto4');
  });

  app.get('/proyecto5', (req, res) => {
    res.render('proyecto5');
  });

  app.get('/proyecto6', (req, res) => {
    res.render('proyecto6');
  });

  app.get('/proyecto7', (req, res) => {
    res.render('proyecto7');
  });

  
  app.get('/proyecto8', (req, res) => {
    res.render('proyecto8');
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
