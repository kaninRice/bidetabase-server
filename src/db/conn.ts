import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.HOST,
    port: parseInt(process.env.PG_PORT!),
    database: process.env.PG_DATABASE!
});

module.exports = {
    query: (text: string, params: any[]) => pool.query(text, params)
};