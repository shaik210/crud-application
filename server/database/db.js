import mongoose from "mongoose"


const Connection = async()=>{
const URL='mongodb+srv://users:0000@cluster0.njjfuvc.mongodb.net/?retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log("database connected")
    }catch(error) {
        console.log("Error while connecting with database",error)
    }

    }



export default Connection;