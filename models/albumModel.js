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
 

},
{collection:"inventory"},{model:"albums"});

// const Albumka="dss"
const Album=mongoose.model('AlbumModel', AlbumSchema);

module.exports = Album
