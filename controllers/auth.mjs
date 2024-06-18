
import registerSchema from "../mongo.mjs"

export const login=async(req,res)=>{
    const exist =await registerSchema.findOne({email:req.body.email})

    if(exist) {
            const pwd = await registerSchema.findOne({$and:[{email:req.body.email},{password:req.body.password}]})
            if (!pwd) return res.status(401).send("Invalid Credentials")
                else{
                    const {username,email} =exist
                    const obj ={username,email}
                    return res.status(200).json(obj)
            }
              
            }
        else{
            return res.status(401).send("User does not exist");
        }
}


export const register=async(req,res)=>{

    console.log("register")
const exist =await registerSchema.findOne({$or:[{email:req.body.email},{username:req.body.username}]})

if(exist) res.status(401).send("username or email already exists")
    else{
        const inserted =await registerSchema.insertMany({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        if (inserted)  res.status(202).json("inserted");
    else {
        console.log("err")
      res.status(401).json("Error");
    }
    }
}
