const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'bookstore'
});

conn.connect(function (err) {
  if (err) {
    console.log('erro connect to db', err.message);
  }
  console.log('connection is okay');
});

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/books', (req, res) => {
  //   All books with full data
  // List the following data:
  // book title
  // authors name
  // category
  // publishers name
  // price
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, (err, result) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    console.log(result);
    res.send(result);
  });
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
