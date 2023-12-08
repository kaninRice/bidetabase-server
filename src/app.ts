import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const db = require('./db/conn.ts')

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

let corsOptions = {
    origin: process.env.CLIENT_ORIGIN
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM bidet');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(port, () => {
    console.log('server started')
})