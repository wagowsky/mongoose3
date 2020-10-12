const express=require("express")
const mongoose=require("mongoose")
const albumRoutes=require("./routes/albumRoutes")


const app=express()


app.get("/",(req,res)=>{
    res.status(200)
    res.send(req.protocol + '://' + req.get('host') + req.originalUrl)
})





 const connectDB=async(req)=>{
     try { console.log("trying to connect");
     const conn = await mongoose.connect('mongodb://localhost:27017/wagowsky', {
         useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology: true})
         
         console.log(`Mongoose connected : ${conn.connection.host+':'+conn.connection.port}`);
         
     } catch (error) {
         console.error(error.message)
     }    
    }

 
    
   



 
connectDB()
        // console.log("running");
      

 

   
app.use(express.json());


app.use("/api/albums",albumRoutes)


app.listen(5000,console.log("server is running on port 5000"))