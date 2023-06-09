const multer = require('multer');
const cryto = require('crypto');
const path = require('path');

module.exports = {
    dest: path.resolve(__dirname, "..", "..", "temp", "uploads",),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "temp", "uploads",));
        },
        filename: (req, file, cb) => {
            cryto.randomBytes(5, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024 * 100,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif",
            "video/mp4",
            "application/pdf"
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    },
};