const express = require('express')
const cityRouter = express.Router()
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

cityRouter.post("/", (req,res,next) =>{
    const newCity = new City(req.body)
    newCity.save((err,savedCity) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCity)
    } )
})

cityRouter.delete("/:cityId", (req,res,next)=> {
    City.findOneAndDelete({_id: req.params.cityId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.city}`)
    })
})

//cityRouter.get()

module.exports = cityRouter