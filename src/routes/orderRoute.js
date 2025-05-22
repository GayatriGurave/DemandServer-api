import express from "express"
import { createOrder, fetchOrder, updateOrderItems } from "../controllers/orderController.js"


let orderRouter = express.Router()

orderRouter.get("/fetchorder", fetchOrder)
orderRouter.post("/createorder", createOrder)
orderRouter.post("/updateorderacceptedqty", updateOrderItems)

export { orderRouter }