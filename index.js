require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/kisan",(req,res)=>{
    res.send("kisan sharma")
})

app.get("/kisann",(req,res)=>{
  res.send("kisan sharma bhai hai ")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})