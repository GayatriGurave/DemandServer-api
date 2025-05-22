import express from "express"
import { createProduct,fetchProduct, updateProductPrice } from "../controllers/prodController.js"
import { upload } from "../../middleware/FileUpload.js"

let productRouter = express.Router()

productRouter.post("/createproduct",upload.single("prodimage"),createProduct)
productRouter.get("/fetchproduct",fetchProduct)
productRouter.put("/updateprice",updateProductPrice)
export{productRouter}