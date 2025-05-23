import express from "express"
import { createOrder, fetchApproveOrderStatus, fetchOrder, updateOrderItems } from "../controllers/orderController.js"


let orderRouter = express.Router()

orderRouter.get("/fetchorder", fetchOrder)
orderRouter.post("/createorder", createOrder)
orderRouter.post("/updateorderacceptedqty", updateOrderItems)
orderRouter.get("/approveorderstatus",fetchApproveOrderStatus)
export { orderRouter }