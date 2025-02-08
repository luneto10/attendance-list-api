require("dotenv").config();
console.log("MONGODB_URI:", process.env.MONGODB_URI);
import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
mongoose
    .connect(process.env.MONGODB_URI!)
    .then(() => {
        console.log("MongoDB connected successfully!");
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
