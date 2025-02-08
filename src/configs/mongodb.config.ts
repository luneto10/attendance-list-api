import mongoose from "mongoose";
require("dotenv").config();
async function connect() {
    mongoose
        .connect(process.env.MONGODB_URI!, {
            dbName: process.env.DB_NAME || "test",
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
}

export default connect;
