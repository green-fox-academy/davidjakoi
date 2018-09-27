const express = require('express');
const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const path = require('path');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.json(`Thanks ${req.body.user_name}, we will send updates to ${req.body.user_email}.`);
});

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}.`);
});