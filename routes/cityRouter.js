const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const uuidv4 = require('uuid/v4')
const path = require('path')

const DIR = './uploads/'
const storage = multer.diskStorage({
    //diskStorage is used to define destination and filename
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLocaleLowerCase().split(' ').join('.')
        cb(null, uuidv4() + '-' + fileName)
    }
})

const cityRouter = express.Router()

var upload = multer({
    storage:storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }

})

const City = require('../models/CitySchema.js')

cityRouter.get("/",(req,res,next) =>{
    City.find((err,cities) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cities)
    })
})

cityRouter.post("/files", upload.single('cityImage') ,(req,res,next) =>{
    console.log(res);
    
    const url = req.protocol + '://' + req.get('host')
    const newCity = new City({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        cityImage:url + '/uploads/' + req.file.filename,
        
    });
    newCity 
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created city",
                createdCity :{
                    name: result.name,
                    _id: result._id,
                    latitude: result.latitude,
                    longitude:result.longitude,
                    cityImage:result.cityImage,
                    
                }
            })
        })
    // const newCity = new City(req.body)

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