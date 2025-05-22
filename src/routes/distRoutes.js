import express from "express"
import {createDistibuter,dologin,fetchDistributer} from "../controllers/distController.js"

let distRouter = express.Router()

distRouter.post("/createdist",createDistibuter)
distRouter.get("/fetchdist",fetchDistributer)
distRouter.post("/login",dologin)

export {distRouter}