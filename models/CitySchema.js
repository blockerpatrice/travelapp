const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type:String,
    required: true,
  },
  comments: String,
  cityImage: 
      { type: String },
  rating: {
    type: String
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