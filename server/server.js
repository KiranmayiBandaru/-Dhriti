const express = require("express")
require('dotenv').config()
const connectDB = require("./config/db.js")

connectDB();

const app = express()

const PORT = process.env.PORT
app.get('/', (req, res)=>{
     res.send("the hostel backend is running")
})

app.listen(PORT , ()=>{
    console.log(`the server is listening `)
})