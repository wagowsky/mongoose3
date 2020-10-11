const express=require("express")
const mongoose=require("mongoose")
const router=express.Router()
// const {getAlbums}=require("../controllers/albumController")
const Album=require("../models/albumModel")



// router.route("/").get(getAlbums)

router.get ("/", async (req, res) => {
    const albums = await Album.find({});
    console.log(albums[0]);
    res.send(albums[0]);
  });




// router.get("/", async(req,res)=>{
//     try {
//         const albums=await Album.find({})
    
//         console.log(albums);
//         res.send(albums)
//     } catch (error) {
//         console.error(error)
//     }
// })

module.exports=router