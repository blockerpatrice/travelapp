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
    type:String
  },
  longitude: {
    type:String
  },
}, {
  timestamps: true,
});


module.exports = mongoose.model("City", CitySchema);