import express from 'express';
import mongoose from 'mongoose';
import Word from './modals/Word.js';
const app = express();


app.post('/', async (req, res)=>{
  const user = req.body
  const newUser = await Word.create(user)
  return res.json(newUser)

})

app.get('/', async (req, res)=>{
  
  return res.json('test')

})
mongoose.set("strictQuery", true);
mongoose
  .connect(
    'mongodb+srv://tex:tex@cluster0.4isr0ao.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => console.log('conectado'))
  .catch(() => console.log('error'));

  app.listen(3000)

 