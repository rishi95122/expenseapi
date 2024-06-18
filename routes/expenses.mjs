import express from "express"

import {  addExpense, getexpenses ,deleteExpense,category} from "../controllers/expenses.mjs";

const router =express()
  
router.post("/get", getexpenses);
router.post("/add", addExpense);
router.post("/delete", deleteExpense);
router.post("/category", category);
export default router;