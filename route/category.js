import express from 'express'
const router = express.Router()

router.get('/catagories',(req,res)=> {
    res.send('get all catagories')
})
router.get('/catagory:number',(req,res) => {
    console.log(req.param.number)
    res.send(req.param.number)
})
router.post('/catagory',(req,res) => {
    res.send(req.body)
})
router.put('/catagory',(req,res)=> {
    res.send('data updated succssfuly')
})
router.delete('/catagory',(req,res) => {
    res.send('data deleted successfully')
})

export default router