const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen(3000, () => console.log("Servidor rodando"))

app.get("/skills", (req,res) =>{
    res.send({
        title: "Pizza Calabresa",
        description: "Calabresa com mussarela",
        price: 40,
        
    })
})