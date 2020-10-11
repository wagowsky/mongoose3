const mongoose = require('mongoose');
// const {Schema}=mongoose

const AlbumListSchema = new mongoose.Schema({
  type: String,
  require: true,
});

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  founded: {
    type: String,
    required: true,
  },
  albums: {
    title: { type: [AlbumListSchema] },
  },
});

module.exports = mongoose.model('ArtistModel', ArtistSchema);
