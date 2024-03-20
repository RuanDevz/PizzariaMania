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

app.get("/", (req, res) => {
    const email = 'Ruanbatista1509@outlook.com';
    const senha = 'Ruan1120#@';

    db.query("INSERT INTO login (email, senha) VALUES (?, ?)", [email, senha], (err, result) => {
        if (err) {
            console.error("Erro ao inserir no banco de dados:", err);
            return res.status(500).send("Erro ao inserir no banco de dados");
        }
        console.log("Dados inseridos com sucesso:", result);
        res.send("Dados inseridos com sucesso no banco de dados");
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
