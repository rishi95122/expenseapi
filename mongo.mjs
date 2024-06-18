import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO_API).then(()=>{
    console.log("connected to mongo")
}).catch((err)=>{
    console.log("err",err)
})

const register = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const registerSchema =mongoose.model("register",register)
export default registerSchema