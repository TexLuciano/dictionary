
import Word from '../modals/Word.js';


const  getWord = async(req, res)=>{
    try {
     const word = await Word.find()

     return res.status(200).json(word)

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}

const  createWord = async(req, res)=>{
  try {
    const { name, translate, dificult } = req.body;
    const newUser = await Word.create({ name, translate, dificult });

    return res.json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

const  deleteWord = async(req, res)=>{
  try {
    const id = req.params.id

    await Word.findByIdAndDelete({_id:id})

    return res.json({response: "deletado"});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

const  editWord = async(req, res)=>{
  try {
   const data = await Word.findByIdAndUpdate(
   { _id: req.params.id},
   req.body,
   {new:true}
   )

    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}


export { getWord, createWord, deleteWord, editWord}