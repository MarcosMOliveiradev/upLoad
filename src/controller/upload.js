const prismaClient = require('../database/prismaClite.js');


class upload {
    async handle(req, res){
        const {originalname: name, filename} = req.file;


        const uploads = await prismaClient.upLoad.create({
            data: {
                name,
                filename
            }
        })

        return res.json(uploads)
    }


    async remove(req, res){
        const id = req.params.id;

        const ID = await prismaClient.upLoad.delete({
            where: {
                id: id
            }
        })

        return res.send(` Usuario ${id} deletado com sucesso!`)
    }
}
module.exports = upload