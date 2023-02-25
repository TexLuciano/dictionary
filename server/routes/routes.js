import express from 'express'
import{ getWord,createWord, deleteWord,editWord } from '../controllers/UserController.js'

const router = express.Router()

router.get("/word",getWord)
router.post("/create",createWord)
router.delete("/create/:id",deleteWord)
router.put("/create/:id",editWord)

export default router