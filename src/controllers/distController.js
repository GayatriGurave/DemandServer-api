import { Distributer } from "../models/distSchema.js";
import bcrypt from "bcryptjs";

//add distributer
let createDistibuter = async (req, res) => {
    let reqData = req.body
    console.log("Data : ", reqData);
    try {
        let salt = await bcrypt.genSalt(10)
        let encryptPassword = await bcrypt.hash(reqData.password, salt)
        let result = await Distributer.create({ ...req.body, password: encryptPassword })
        res.status(200).json({
            data: result,
            message: "Distributer Added Successfully.."
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

//fetch distributer

let fetchDistributer = async (req, res) => {
    try {
        let result = await Distributer.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

// destributer login
let dologin = async (req, res) => {
    try {
        let { email, password } = req.body
        //1. is user exit
        let logedUser = await Distributer.findOne({ email })
        if (!logedUser) {
            return res.status(400).json({
                message: "User Not Login"
            })
        }
        let isValidPassword = await bcrypt.compare(password, logedUser.password)
        if (!isValidPassword) {
            return res.status(400).json({

                message: "Invalid Password"
            })
        }
        res.status(200).json({
            data: logedUser,
            message: "Login Successfull"
        })
    } catch (error) {
        console.log(error);
    }
}


export { createDistibuter, fetchDistributer, dologin }