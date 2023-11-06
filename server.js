import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import categoryRouter from "./route/categoryRoute.js"
import questionRouter from "./route/questionRoute.js"
import connectDB from './config/db.js'

connectDB()

const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(categoryRouter)
app.use(questionRouter)

app.listen(port,(req,res)=> {
    console.log(`server running ${port}`)
})