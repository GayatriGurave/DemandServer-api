import express from "express" 
import bodyParser from "body-parser";
import { connectionToDatabase } from "./src/DB/dbConnection.js";
import { distRouter } from "./src/routes/distRoutes.js";
import { productRouter } from "./src/routes/prodRoutes.js";
import cors from "cors"
import { orderRouter } from "./src/routes/orderRoute.js";
import { countRouter } from "./src/routes/countRouter.js";
// create server variable

let server = express()
 
server.use(bodyParser.json())
server.use(cors())
server.use("/uploadimages",express.static("uploadimages"))

//connect routes with server

server.use("/api",distRouter)
server.use("/api",productRouter)
server.use("/api",orderRouter)
server.use("/api",countRouter)

//call function 
connectionToDatabase()

//start server

server.listen(5000,()=>{
    console.log("Server Started..");
})
