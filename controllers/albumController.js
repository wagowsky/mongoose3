const mongoose=require("mongoose")


const db=require("../data/db.json")

const {albums}=db



exports.getAlbums=(req,res)=>{
    res.send(albums);
}