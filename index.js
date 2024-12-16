require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send("Hello World!")
})
app.get("/twitter", (req, res)=>{
    res.send("hiteshdom.com")
})
app.get("/login", (req, res)=>{
    res.send('<h1>Please Login</h1>')
})
app.get('/youtube',(req, res)=>{
    res.send("<h2>Chai aur code</h2>")
})
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
}) 