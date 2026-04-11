const express = require("express")
require('dotenv').config()
const connectDB = require("./config/db.js")
const authRoutes = require('./routes/authRoutes')

connectDB();

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
     res.send("the hostel backend is running")
})
app.use('/api/auth', authRoutes)


const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`the server is listening `)
})
