import express from 'express'
import { getQuestions,getQuestion,registerQuestion,updateQuestion,deleteQuestion} from '../controller/questionController.js'
import { apiKeyMiddleware} from "../middleware/authMiddleware.js";
const questionRouter = express.Router()

questionRouter.get('/category/:category/questions',getQuestions)
questionRouter.get('/category/:category/question/:id',getQuestion)
questionRouter.post('/category/:category/question', apiKeyMiddleware, registerQuestion)
questionRouter.put('/category/:category/question/:id', apiKeyMiddleware, updateQuestion)
questionRouter.delete('/category/:category/question/:id', apiKeyMiddleware, deleteQuestion)

export default questionRouter