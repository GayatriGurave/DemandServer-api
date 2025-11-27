import mongoose from "mongoose";

let orderSchema = mongoose.Schema({
    orderDate : {type: Date , default: Date.now},
    orderStatus : {
        type : String,
        default : "Pending",
        values:["Approved","Shipped","Pending"]
     },
    distributerId : { type : mongoose.Schema.Types.ObjectId , ref:"Distributer"},
    orderTotalAmount: { type: Number },
    approvedAmount :{ type : Number,
                        default : 0
    },
    orderItems : [{
        prodId : { type: mongoose.Schema.Types.ObjectId , ref:"Product"},
        demandedQty : {type : Number},
        exceptedQty : { type : Number , default : 0}
    }]
})

export const Order = mongoose.model("Order",orderSchema)
