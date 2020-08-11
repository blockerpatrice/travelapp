const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

require('dotenv').config()



const port = process.env.PORT || 5002;
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors())
app.use(morgan('dev'))

//app.use("/cities", require("./routes/cityRouter.js"))
//... other imports 

const api = require('./routes/cityRouter')

app.use('/uploads', express.static('uploads'))
app.use('/api', api)

app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect("mongodb://localhost:27017/travels",{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/travels",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
},
() => console.log("Connected to Mongo")
)

//error handler
app.use((err,req,res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port , () => {
    console.log(`Listening`)
})


