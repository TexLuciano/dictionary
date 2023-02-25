
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Word from './modals/Word.js';
import cors from 'cors';
import conectDb from './database/db.js';
import router from './routes/routes.js';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(router)

// app.post('/user', async (req, res) => {
//   try {
//     const { name, translate, dificult } = req.body;
//     const newUser = await Word.create({ name, translate, dificult });

//     return res.json(newUser);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: 'Erro interno do servidor' });
//   }
// });

// app.get('/', async (req, res) => {
//   return res.json('Teste de conexão bem-sucedido');
// });


conectDb()
  .then(() =>
    app.listen(3000, () => console.log('Servidor iniciado na porta 3000')),
  )
  .catch((err) => console.log(err));

const corsOptions = {
  origin: 'http://localhost:5175',
};
app.use(cors(corsOptions));
