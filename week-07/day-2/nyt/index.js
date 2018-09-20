const express = require('express');
const app = express();
const PORT = 3000;
const fetch = require('node-fetch');
const api = '1498d7b192a1456fa80f772dfe6467d1';
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/api/nytimes/:q', (req, res) => {
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api}&q=${req.params.q}`;

  fetch(url)
    .then((resp) => (resp.json()))
    .then(response => {
      res.json(response);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
