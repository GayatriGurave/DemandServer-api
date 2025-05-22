import { adminDashboardCounts } from "../controllers/counterController.js";
import express from "express"

let countRouter = express.Router()

countRouter.post("/overView",adminDashboardCounts)


export {countRouter}