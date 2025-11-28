import mongoose from "mongoose";

// let DB_URL = "mongodb://localhost:27017/demand_app_db"
let DB_URL = "mongodb://mongo:27017/demand_app_db"

async function connectionToDatabase(){
    try {
        let conn = await mongoose.connect(DB_URL) 
        console.log("DB CONNECTED",conn.connection.name);
    } catch (error) {
        console.log(error);
    }
}

export { connectionToDatabase }