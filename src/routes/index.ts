import express from 'express'
import type { markerObject } from '../models/marker';
const db = require('../db/conn.ts');

const router = express.Router()

router.get('/get-all-coordinates', async (req, res) => {
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

router.get('/add-marker', async (req, res) => {
    const marker: markerObject = req.body;

    try {
        const lastId = await db.query('SELECT MAX(id) FROM bidet')
        const newId = lastId.rows[0].max + 1;

        db.query(`INSERT INTO bidet 
        (id, image_link, location, addi_desc, coordinates) VALUES
        ($1, $2, $3, $4, $5)`,
        [newId, marker.image_link, marker.location, marker.addi_desc, marker.coordinates]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

export default router