// Create web server

// Import express module
const express = require('express');
const app = express();

// Import body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Import mysql module
const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comment'
});

// Connect to database
connection.connect();

// Set up the server
const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
});

// Set up the route
app.get('/comment', (req, res) => {
    const sql = 'SELECT * FROM comment';
    connection.query(sql, (err, result) => {
        res.send(result);
    });
});

app.post('/comment', (req, res) => {
    const sql = 'INSERT INTO comment SET ?';
    const comment = {
        name: req.body.name,
        comment: req.body.comment
    };
    connection.query(sql, comment, (err, result) => {
        res.send('Comment added successfully!');
    });
});

app.put('/comment/:id', (req, res) => {
    const sql = 'UPDATE comment SET ? WHERE id = ?';
    const comment = {
        name: req.body.name,
        comment: req.body.comment
    };
    connection.query(sql, [comment, req.params.id], (err, result) => {
        res.send('Comment updated successfully!');
    });
});

app.delete('/comment/:id', (req, res) => {
    const sql = 'DELETE FROM comment WHERE id = ?';
    connection.query(sql, req.params.id, (err, result) => {
        res.send('Comment deleted successfully!');
    });
});
