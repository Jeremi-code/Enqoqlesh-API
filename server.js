import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use('/api')
app.get('/',(req,res) => {
    res.json({message : "wg"})
})
app.listen(5000,(req,res)=> {
    console.log("what is happening here")
})