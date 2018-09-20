const express = require('express');
const app = express();
const PORT = 3000;
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const path = require('path');
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));
  let location = req.query;
  let results = unirest.get(`https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=${location}`)
    .header("X-Mashape-Key", "IEubOX8EKmmsh5S6UOuW6STkyXiOp14O0XGjsnnbus2zP2PueI")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.body, result.header, result.status);
    });

});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})