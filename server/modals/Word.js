import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  translate: {
    type: String,
    required: true
  },
  dificult: {
    type: String,
    required: true
  },
 
});

export default mongoose.model('Word', wordSchema)