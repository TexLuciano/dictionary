import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Word from './modals/Word.js';
import cors from 'cors';
import conectDb from './database/db.js';
import router from './routes/routes.js';



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(router)



conectDb()
  .then(() =>
    app.listen(3000, () => console.log('Servidor iniciado na porta 3000')),
  )
  .catch((err) => console.log(err));

const corsOptions = {
  origin: 'http://localhost:5175',
};
app.use(cors(corsOptions));
