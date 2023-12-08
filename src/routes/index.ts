import express from 'express'
const db = require('../db/conn.ts');

const router = express.Router()

router.get('/get-all-coordinates', async (req, res) => {
    try {
        const result = await db.query('SELECT coordinate FROM bidet');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router