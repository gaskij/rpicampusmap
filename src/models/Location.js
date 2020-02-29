const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },

  id: {
    type: String,
    require: true,
  },
  properties: {
    name: {
      type: String,
      require: true,
    },
    nick: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    popupContent: {
      type: String,
      require: true,
    },
  },
  geometry: {
    type: String,
    coordinates: {
      type: Array,
      require: true,
    },
  },
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
