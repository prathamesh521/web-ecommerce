"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    mongoose_1.default.connect("mongodb://localhost:27017", {
        dbName: "ecommerce",
    }).then((connect) => {
        console.log(`Connected to database${connect.connection.host}`);
    }).catch((err) => {
        console.log("Error connecting to database", err);
    });
};
exports.connectDB = connectDB;
