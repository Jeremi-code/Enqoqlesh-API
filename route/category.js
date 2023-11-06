import express from 'express'
const categoryRouter = express.Router()

router.get('/categories',(req,res)=> {
    res.send('get all catagories')
})
router.get('/category/:category',(req,res) => {
    console.log(req.param.category)
    res.send(req.param.category)
})
router.post('/category',(req,res) => {
    res.send(req.body)
})
router.put('/category',(req,res)=> {
    res.send('data updated succssfuly')
})
router.delete('/category',(req,res) => {
    res.send('data deleted successfully')
})

export default categoryRouter