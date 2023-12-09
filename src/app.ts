import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import indexRouter from './routes/index'

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

let corsOptions = {
    origin: process.env.CLIENT_ORIGIN
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', indexRouter)

app.listen(port, () => {
    console.log('server started')
})