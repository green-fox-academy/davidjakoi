const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/assets', express.static('assets'));


app.get('/ping', (req, res) => {
  //res.send('pong');
  res.json({
    message: 'pong2',
    uzenet: 'uzenet',
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});



app.listen(PORT, () => {
  console.log(`the server is up and running on ${PORT}`);
});

