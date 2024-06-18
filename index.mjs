import express from "express"

import authRoutes from "./routes/auth.mjs"
import expensesRoutes from "./routes/expenses.mjs"
import cors from "cors"
const app=express();
app.use(express.json())
app.use(express())
app.use(cors())
app.use("/api/auth",authRoutes)
app.use("/api/expenses",expensesRoutes)
app.listen(8800,(req,res)=>{
    console.log("connected")
})