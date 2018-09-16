'use strict'

const PORT = 3000;
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

let cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let alcoholToFilter = req.query.alcohol;
  let forwardedCocktails = [];
  if (alcoholToFilter != undefined) {
    cocktails.forEach(function (element) {
      if (element.contains.indexOf(alcoholToFilter) != -1) {
        forwardedCocktails.push(element);
      }
    });
  } else {
    forwardedCocktails = cocktails;
  }
  console.log(req.query.alcohol);
  res.render('home', { forwardedCocktails, alcoholList });

});



app.listen(PORT, () => {
  console.log(`we are running the server on port ${PORT}`);
});