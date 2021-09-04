const express = require('express')
const app = express()
const PORT = 3001;
const api = require('../backend-server/api/api')
const cors = require('cors')
app.use(cors())


const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/react_blog"

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex: true},(err, connection)=>{
    if(err)
        console.log(err)
    else
        console.log("Database Connection Successful")
})

const logger = (req, res, next)=>{
    console.log("Logging ",req.url)
    next()
}

app.use(logger)



app.listen(PORT, ()=> {
    
    console.log("Server is running")
}).on('error', (error)=>{
    console.log("Error ", error.message)
})

app.use("/api", api)

