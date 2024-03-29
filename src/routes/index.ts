import express from 'express'

import storage from '../middleware/uploadImage';

const db = require('../db/conn.ts');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: storage });

router.get('/get-all-marker-coordinates', async (req, res) => {
    try {
        const result = await db.query('SELECT id, coordinates FROM bidet');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/get-marker-info/:id', async (req, res) => {
    const markerId: number = (req.params.id as unknown) as number;

    try {
        const result = await db.query('SELECT * FROM bidet WHERE id = ' + req.params.id);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/add-marker', upload.single('file'), async (req, res) => {
    const marker = JSON.parse(req.body.form);
    let filename: string | null;

    req.file == null
        ? filename = null
        : filename = req.file.filename;

    marker.coordinates = `${marker.x}, ${marker.y}`;

    try {
        const lastId = await db.query('SELECT MAX(id) FROM bidet')
        const newId = lastId.rows[0].max + 1;

        db.query(`INSERT INTO bidet 
        (id, image_link, location, addi_desc, coordinates) VALUES
        ($1, $2, $3, $4, $5)`,
        [newId, filename, marker.location, marker.addi_desc, marker.coordinates]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

export default router