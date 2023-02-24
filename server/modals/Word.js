import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  age:{
    type:Number,
    require:true
  }

})
export default mongoose.model('Word', wordSchema)