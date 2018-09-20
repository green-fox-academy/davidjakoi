const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

function sumOfArray(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
}

function multiplyArray(array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
}

function doubleElements(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}

app.get('/', (req, res) => {
  res.send('gfvdscds');
});

app.post('/arrays', (req, res) => {
  let numberArray = req.body.numbers;
  if (req.body.what == "sum") {
    res.json({
      result: sumOfArray(numberArray)
    });
  } else if (req.body.what == "multiply") {
    res.json({
      result: multiplyArray(numberArray)
    });
  } else if (req.body.what == "double") {
    res.json({
      result: doubleElements(numberArray)
    });
  } else {
    res.json({
      result: "Please provide what to do with the numbers!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

