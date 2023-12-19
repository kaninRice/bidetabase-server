// @ts-nocheck
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const uniqueTag = Date.now() + Math.round(Math.random() * 1e9);
        cb(null, uniqueTag + file.originalname);
    },
});

export default storage;
