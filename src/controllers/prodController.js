import { Product } from "../models/productSchema.js";

//add product
let createProduct = async (req,res)=>{
    let reqData = req.body
    console.log(reqData);
    try {
        let filePath = req.file.path
        console.log("File",filePath);
        let result = await Product.create({...req.body,prodimage:filePath})
        res.status(200).json({
            data : result,
            message : "Product Added Successfully.."
        })
        } catch (error) {
        res.status(500).json(error)            
    }
}

let fetchProduct = async (req,res)=>{
    try {
        let result = await Product.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update product price
let updateProductPrice = async (req, res) => {
    try {
        let { prodId, price } = req.body
        let result = await Product.findByIdAndUpdate({ _id: prodId }, {
            price: price
        }, { new: true })
        res.status(200).json({
            data: result,
            message: "Product Updated"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}


export {createProduct,fetchProduct,updateProductPrice}