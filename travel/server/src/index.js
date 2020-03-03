const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()


require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

// mongoose.connect("mongodb://localhost:27017/travels",{useNewUrlParser: true})
// .then(()=> console.log("Connected to MongoDB"))
// .catch(err => console.error(err));

mongoose.connect("mongodb://localhost:27017/travels",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
},
() => console.log("Connected to Mongo")
)

app.use("/cities", require("./routes/cityRouter.js"))

//error handler
app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

const port = 1396
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})