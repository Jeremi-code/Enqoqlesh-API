import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import {router} from "./route/category.js"
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use('/api',router)

app.listen(port,(req,res)=> {
    console.log(`server running ${port}`)
})