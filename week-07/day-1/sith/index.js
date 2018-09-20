const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

function makeItYoda(string) {
  let arrayOfSentences = string.split('. ');
  let arrayOfWords = [];
  for (let i = 0; i < arrayOfSentences.length; i++) {
    arrayOfWords[i] = arrayOfSentences[i].split(' ');
  }
  let tempWord;
  console.log(arrayOfSentences);
  console.log(arrayOfWords);
  for (let i = 0, z = 1; i < arrayOfWords[i].length && z < ; i++) {
    tempWord = arrayOfWords[i][i];
    arrayOfWords[i][i] = arrayOfWords[i][i + 1];
    arrayOfWords[i][i + 1] = tempWord;
  }

  return arrayOfWords;
}

app.get('/', (req, res) => {
  res.send('okay');
});

app.post('/sith', (req, res) => {
  res.json({
    sith_text: makeItYoda(req.body.text)
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})