// const { Router } = require('express')
const express = require('express');

// Rotas
const route = require('./route.js')


/// Starte do servidor
const app = express();



app.use(route)

/// Porta que o servidor roda
app.listen({port: 3000}, () => {
    console.log("rodando!")
})

