const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comments: String,
  image: String,
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