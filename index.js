import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import categoryRouter from "./route/categoryRoute.js"
const port = 2000
const app = express()
const router = express.Router()
console.log('hello')
app.use(express.json())
router.get('/',(req,res)=> {
    res.send('hello')
})

app.listen(4000,()=> { 
    console.log(`server running ${port}`)
}).on('error', (err) => {
    console.log(err)
})