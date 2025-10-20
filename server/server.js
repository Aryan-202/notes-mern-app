import express from 'express';
import { config } from 'dotenv';

config()
const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req, res)=>{
    res.status(200).send('hello')
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})