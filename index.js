// Inclusão dos pacotes
const express = require('express')
var mysql = require('mysql2');

// Instancia o express
const app = express()

// Definição de porta
const port = 3000

// // Abrindo conexão com base de dados
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sistema_noticias"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Conexão MySql ok")
})

// Serviço de Hello World
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {
    // Busca categorias
    connection.query('SELECT id, name FROM sistema_noticias.categoria', function (err, rows, fields) {
        if (err) throw err;
        res.send(rows)
    });
})

// Subindo servidor Node
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
