import express from 'express'
const questionRouter = express.Router()

questionRouter.get('/category/:category/questions',(req,res) => {

})
questionRouter.get('/category/:category/question/:id',(req,res) => {
    
})
questionRouter.post('/category/:category/question',(req,res) => {
    
})
questionRouter.put('/category/:category/question/:id',(req,res) => {
    
})
questionRouter.delete('/category/:category/question/:id',(req,res) => {
    
})

export default questionRouter