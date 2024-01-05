import express from 'express'
import { getQuestions,getQuestion,addQuestion,updateQuestion,deleteQuestion} from '../controller/questionController.js'
import { defaultRouteMiddleware} from "../middleware/authMiddleware.js";
const questionRouter = express.Router()

questionRouter.get('/category/:category/questions',getQuestions)
questionRouter.get('/category/:category/question/:id',getQuestion)
questionRouter.post('/category/:category/question', defaultRouteMiddleware, addQuestion)
questionRouter.put('/category/:category/question/:id', defaultRouteMiddleware, updateQuestion)
questionRouter.delete('/category/:category/question/:id', defaultRouteMiddleware, deleteQuestion)

export default questionRouter