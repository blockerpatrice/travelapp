const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type:String
  },
  cityImage: { 
    type: String 
  },
  comments:{
    type:String
  },
  latitude: {
    type:Number
  },
  longitude: {
    type:Number
  },
}, {
  timestamps: true,
});


module.exports = mongoose.model("City", CitySchema);