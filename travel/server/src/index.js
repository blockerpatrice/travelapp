//express app
const express = require('express')
//const cors = require('cors')
//another middleware meant to handle http requests
const mongoose = require('mongoose')
// const morgan = require('morgan')
// const helmet = require('helmet')

require('dotenv').config()

const routes = require('./api/Routes')

const app = express()

mongoose.connect("mongodb://localhost:27017/",{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

//environment variables can affect the way running processes
//will behave on a computer

// app.use(morgan('common'))
// app.use(helmet())
// app.use(cors({origin: process.env.CORS_ORIGIN}))
app.use(express.json())
//body parser

// app.get('/',(req,res) =>{
//     console.log("working")
// })

app.use('/api/Routes', routes)

app.use((req, res, next) => {
    const error = new Error(`webpage not found`)
    res.status(404)
    next(error)
})

app.use((error, req, res, next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: error.message, 
        
    })
})

const port = 1396
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})