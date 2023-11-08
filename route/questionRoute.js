import express from 'express'
import { getQuestions,getQuestion,registerQuestion,updateQuestion,deleteQuestion} from '../controller/questionController.js'
const questionRouter = express.Router()

questionRouter.get('/category/:category/questions',getQuestions)
questionRouter.get('/category/:category/question/:id',getQuestion)
questionRouter.post('/category/:category/question',registerQuestion)
questionRouter.put('/category/:category/question/:id',updateQuestion)
questionRouter.delete('/category/:category/question/:id',deleteQuestion)

export default questionRouter