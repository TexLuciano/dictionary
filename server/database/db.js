import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER;
import mongoose from 'mongoose';



async function conectDb(){
 
  mongoose.set('strictQuery', true)
  await mongoose
  .connect(`mongodb+srv://${dbUser}:${dbUser}@cluster0.4isr0ao.mongodb.net/meubanco?retryWrites=true&w=majority`)
 

}
export default conectDb
