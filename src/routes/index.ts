import express from 'express'
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

export default router