const express = require('express')
const cityRouter = express.Router()
const multer = require('multer')
const mongoose = require('mongoose')

const storage = multer.diskStorage({
    //diskStorage is used to define destination and filename
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLocaleLowerCase().split(' ').join('.')
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const upload = multer({storage:storage})

const City =require('../models/CitySchema.js')



cityRouter.get("/",(req,res,next) =>{
    City.find((err,cities) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cities)
    })
})

cityRouter.post("/",upload.single('cityImage') ,(req,res,next) =>{
    console.log(req.file);
    const url = req.protocol + '://' + req.get('host')
    const newCity = new City({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        cityImage:url + '/uploads/' + req.file.filename,
        latitude:req.body.latitude,
        longitude:req.body.longitude
    });
    newCity 
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created city",
                createdCity :{
                    name: result.name,
                    cityImage:result.cityImage,
                    _id: result._id,
                    latitude: result.latitude,
                    longitude:result.longitude
                }
            })
        })
    //const newCity = new City(req.body)

    // newCity.save((err,savedCity) => {
    //     if(err){
    //         res.status(500)
    //         return next(err)
    //     }
    //     return res.status(201).send(savedCity)
    // } )
})

cityRouter.delete("/:cityId", (req,res,next)=> {
    City.findOneAndDelete({_id: req.params.cityId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.name}`)
    })
})


//cityRouter.get()

module.exports = cityRouter