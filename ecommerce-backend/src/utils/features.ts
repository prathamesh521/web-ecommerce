import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "ecommerce",
    }).then
    ((connect) => {
        console.log(`Connected to database${connect.connection.host}`);
    }).catch((err) => {
        console.log("Error connecting to database", err);
    });
};