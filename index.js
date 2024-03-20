const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createPool({
    user: 'root',
    password: 'Ruan1120#@',
    host: 'localhost',
    database: 'pizzaria' 
});
db.query((req,res) =>{
    res.query('')
})
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
