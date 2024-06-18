import mongoose from "mongoose"

const expense=mongoose.Schema({
    id:{
        type:String,
        reuired:true
    }
    ,
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})


const expenses=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    expenses:[]
})

const expenseSchema= mongoose.model("expense",expenses)

export default expenseSchema