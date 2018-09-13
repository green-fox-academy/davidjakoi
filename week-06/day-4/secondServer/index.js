'use strict'

const express = require('express');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    header: 'Green Fox Academy',
  });
});

app.get('/products/:id', (req, res) => {
  res.render('home', {
    title: 'Product Page',
    header: req.params.id,
    withGoodBye: req.query.withGoodBye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`the server is up and running on port ${PORT}`);
});