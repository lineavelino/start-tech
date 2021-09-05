// Inclusão dos pacotes
const express = require('express')
var mysql = require('mysql2');

// Instancia o express
const app = express()

// Definição de porta
const port = 3000

// Serviço de Hello World
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {
    let categorias = []
    res.send(categorias)
})

// Subindo servidor Node
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
