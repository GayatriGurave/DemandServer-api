import { Order } from "../models/orderSchema.js";

//create order

let createOrder = async (req, res) => {
    let reqData = req.body
    console.log(reqData);
    try {
        let result = await Order.create(reqData)
        res.status(200).json({
            data: result,
            maessage: "Order Placed Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//fetch order
let fetchOrder = async (req, res) => {
    try {
        let result = await Order.find()
        .where('orderStatus').eq('Pending')
            .populate("orderItems.prodId")
            .populate("distributerId")
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

let distOrd = async (req, res) => {
    try {
        const { status } = req.query;

        // Build a filter object dynamically
        const filter = status ? { orderStatus: status } : {};

        const result = await Order.find(filter)
            .populate("orderItems.prodId")
            .populate("distributerId");

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};


const updateOrderItems = async (req, res) => {
    try {

        const { orderItems, orderId } = req.body; // Expecting an array of items with prodId, demandedQty, exceptedQty
        console.log("DATA", orderItems);
        // Basic validation
        if (!Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "orderItems must be a non-empty array."
            });
        }

        // Optional: Validate each item structure
        for (const item of orderItems) {
            if (!item._id || typeof item.demandedQty !== "number"
                || typeof item.exceptedQty !== "number") {
                return res.status(400).json({
                    success: false,
                    message: "Each order item must have prodId, demandedQty, and exceptedQty."
                });
            }
        }

        // Update the order's orderItems array
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { orderItems },
            { new: true }
        )
            .populate("distributerId")
            .populate("orderItems.prodId");

        if (!updatedOrder) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }

        let resUpdate = await Order.findByIdAndUpdate(orderId,
            { orderStatus: "Approved" },
            { new: true })
        res.status(200).json({
            success: true,
            message: "Order items updated successfully.",
            order: { resUpdate, updatedOrder }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Approve order status
// Fetch only orders with status "Approved"
const fetchApproveOrderStatus = async (req, res) => {
    try {
        const approvedOrders = await Order.find()
            .where('orderStatus').eq('Approved')
            .populate("orderItems.prodId")
            .populate("distributerId");

        res.status(200).json({
            success: true,
            data: approvedOrders,
            message: "Approved orders fetched successfully."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export { createOrder, updateOrderItems, fetchOrder,fetchApproveOrderStatus,distOrd }