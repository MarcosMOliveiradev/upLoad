const {Router} = require('express');
const express = require('express');
const multer = require('multer');

/// Banco de dados
const upLoad = require('./controller/upload.js');
const uploads = new upLoad

////// Configuração dos arquivos enviados para a API
const multerConfig = require('./config/multer.js');

// prisma
const prismaClient = require('./database/prismaClite.js');


/*** ROTAS ****/
const route = express.Router();

// Rotas

route.get('/', async (req, res) => {
    const uploadss = await prismaClient.upLoad.findMany()

    res.json(uploadss)
});

route.post('/', multer(multerConfig).single('file'), uploads.handle);



route.delete('/:id', uploads.remove)

module.exports = route