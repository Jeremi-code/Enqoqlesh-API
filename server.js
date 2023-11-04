import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import {router} from "./route/catagoryRoute.js"
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use('/api',router)

app.listen(5000,(req,res)=> {
    console.log("what is happening here")
})