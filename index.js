const express = require('express')
const app = express()
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config()

const port = 8080



app.listen(port,(req,res) =>{
    console.log(`Servidor Rodando na porta ${port}`)
})

app.get("/", (req,res) =>{
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    
    })

    db.connect((err) =>{
        if(err){
            console.log('falha ao conectar ao banco de dados')
            res.status(500).send("Erro ao conectar com o banco de dados")
            return;
        }
        console.log('Conexão feita com o banco de dados!')
    })

    db.query("DELETE FROM login WHERE email = 'Mirelli2005@outlook.com'", (err,res) =>{
        if(err){
            console.log('Error ao inserir dados')
        }
    
        console.log("Dados inseridos com sucesso")
    })
})

app.get("/register", (req,res) =>{
    const register = [
        {
            email: 'Ruanbatista1509@outlook.com',
            password: 'Ruan1120#@'
        }
    ]

    res.status(200).json(register)
})