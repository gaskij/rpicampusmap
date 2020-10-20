import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    enum: ['Feature'],
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
    amenity: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      require: true,
    },
    popupContent: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    comments: {
      type: Array,
      require: true,
    },
    photos: {
      type: Array,
      require: true,
    },
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      require: true,
    },
    coordinates: {
      type: Array,
      require: true,
    },
  },
});

const Location = mongoose.model('Location', LocationSchema);

export default Location;
