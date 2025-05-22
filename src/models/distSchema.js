import mongoose from "mongoose";

const DistributerSchema = new mongoose.Schema({
    name : {
        type : String ,
        // required : true ,
        // trim : true
    },
    mobile : {
        type : Number
    },
    email : {
        type : String,
        // required : true,
        // lowercase : true
    },
    password : {
        type : String
    },
    distType : {
        type : String
    },
    address : {
        type :String
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    pincode : {
        type : Number
    },
    isActive : {
        type : Boolean,
        default :false
    }
},{timestamps:true});

export const Distributer = mongoose.model('Distributer',DistributerSchema);