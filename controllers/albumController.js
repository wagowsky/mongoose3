// const db=require("../data/db.json")
// const {albums}=db

const Album = require('../models/albumModel');
const asyncHandler = require('../middleware/asyncHandler');

// exports.getAlbums=async(req,res)=>{
//     try {
//                 const albums = await Album.find({});
//                 console.log({ ...albums[0]._doc.albums });

//                 res.status(200);
//                 res.send({ ...albums[0]._doc.albums });
//               } catch (error) {
//                 res.status(404)
//                 res.send(error.message)
//               }
// }

exports.getAlbums = asyncHandler(async (req, res, next) => {
  const albums = await Album.find({});
  // console.log({ ...albums[0]._doc.albums });
  res.status(200);
  res.send({ ...albums[3]._doc.albums });
  next();
});
