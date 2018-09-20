const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'bookstore'
});

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db', err.message);
        return;
    }
    console.log('Connection established');
});

conn.query(`SHOW TABLES;`, (err, result) => {
    console.log(result);
});


conn.end();