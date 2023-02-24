import express from 'express'
import{getUsers, createUsers} from '../controllers/user.js'
const router = express.Router()

router.get("/users",getUsers)
router.post("/user",createUsers)


export default router