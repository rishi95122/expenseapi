import expenseSchema from "../schema/expenseSchema.mjs"

export const getexpenses=async (req,res)=>{

    const get = await expenseSchema.find({ username: req.body.username });
    if (get[0]) return res.status(200).json(get[0].expenses);
    else {
      res.json([]);
    }
}
export const addExpense=async(req,res)=>{
const add=await expenseSchema.updateOne({username:req.body.username},{
    $push:{
        expenses:{
            id:req.body.id,
            category:req.body.category,
            name:req.body.name,
            amount:req.body.amount,
            date:req.body.date
        }
    }
},{upsert:true})
if(add) {console.log("added")

    return res.status(201).send("success")
}
    else console.log("errrrr")
}

export const deleteExpense=async (req,res)=>{

const rest=await expenseSchema.updateOne({username:req.body.username},{
    $pull:{
        expenses:{
            id:req.body.id
        }
    }
})

if(rest) return res.status(201).send("deleted")
    else return res.status(401).send("error")
}

export const category=async (req,res)=>{
console.log(req.body.username)
    const data=expenseSchema.aggregate([
        { $match: { username: req.body.username } },
        {
          $group: {
            _id: "$expenses.category",
            totalAmount: { $sum: "$expenses.amount" }
          }
        }
      ])

      console.log(data)
  
}
