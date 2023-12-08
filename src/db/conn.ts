import { Pool } from 'pg';

const pool = new Pool({
    user: 'my_user',
    password: 'root',
    host: 'localhost',
    port: 5432, // postgres default
    database: 'bidetabase'
});

module.exports = {
    query: (text: string, params: any[]) => pool.query(text, params)
};