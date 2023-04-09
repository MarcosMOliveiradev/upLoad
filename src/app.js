// const { Router } = require('express')
const express = require ('express');
const multer = require('multer');
const multerConfig = require('./config/multer.js');
const app = express();

app.get('/', (req, res) => {res.send("hello")})

app.post('/', multer(multerConfig).single('file'), (req, res) => {
    res.send(req.file)
    console.log(req.file)
})

app.listen({port: 3000}, () => {
    console.log("rodando!")
})