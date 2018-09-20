const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

function sumUntil(untilThis, sumSum, numberToSum) {
  if (numberToSum != untilThis + 1) {
    sumSum += numberToSum;
    numberToSum++;
    return sumUntil(untilThis, sumSum, numberToSum);
  }
  return sumSum;
}

function multiUntil(num) {
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}

app.get('/doubling/', (req, res) => {
  let input = req.query.input;
  if (input) {
    res.json({
      received: input,
      result: input * 2,
    });
  } else {
    res.json({
      error: "Please provide an input!"
    });
  }
});

app.get('/greeter/', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!",
    });
  } else if (!req.query.title) {
    res.json({
      error: "Please provide a title!",
    });
  }
});

app.get('/appenda/:word', (req, res) => {
  let input = req.params.word;
  let a = 'a';
  let result = input.concat(a);
  res.json({
    appended: result,
  });
});

app.post('/dountil/:method', (req, res) => {
  if (req.params.method == 'sum') {
    res.json({
      result: sumUntil(req.body.until, 0, 1),
    });
  } else {
    res.json({
      result: multiUntil(req.body.until),
    });
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});