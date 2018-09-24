const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'reddit',
});

conn.connect(function (err) {
  if (err) {
    console.log('error connecting to db');
  }
  console.log('connection is okay');
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM posts;`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.json(result);
  });
});

app.post('/posts', (req, res) => {
  // let newDetails = JSON.parse(req.body);
  conn.query(`INSERT INTO posts (title,url) VALUES ('${req.body.title}', '${req.body.url}');`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    conn.query(`SELECT * FROM posts WHERE id=${newPost.insertId}`, (err, result) => {
      res.json(result);
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  conn.query(`SELECT score FROM posts WHERE id=${id};`, (err, result) => {
    let scoreBefore = result[0].score;
    conn.query(`UPDATE posts SET score=${scoreBefore + 1} WHERE id=${id};`, (err, result) => { });
  });
  conn.query(`SELECT * FROM posts WHERE id=${id};`, (err, result) => {
    res.json(result);
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  let id = req.params.id;
  conn.query(`SELECT score FROM posts WHERE id=${id};`, (err, result) => {
    let scoreBefore = result[0].score;
    conn.query(`UPDATE posts SET score=${scoreBefore - 1} WHERE id=${id};`, (err, result) => { });
  });
  conn.query(`SELECT * FROM posts WHERE id=${id};`, (err, result) => {
    res.json(result);
  });
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
