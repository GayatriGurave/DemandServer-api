import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    
    title : {
        type:String,
        required : true
    },
    prodType : {
        type : String
    },
    category: {
        type: String,
        // required: true,
        trim: true
    },
    price : {
        type : Number,
        required : true
    },
    prodimage : {
        type : String
    },
    weight : {
        type :String
    },
    isActive :{
        type : Boolean,
        default : false
    }

},{timestamps : true});

export const Product = mongoose.model('Product',ProductSchema)