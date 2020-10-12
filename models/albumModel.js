const mongoose = require('mongoose');


const AlbumSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  }
 

});

// const Albumka="dss"
const Album=mongoose.model('albums', AlbumSchema);

module.exports = Album
