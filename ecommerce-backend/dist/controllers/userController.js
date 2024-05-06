"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_1 = require("../models/user");
const errorMiddleware_1 = require("../middlewares/errorMiddleware");
exports.createUser = (0, errorMiddleware_1.TryCatch)(async (req, res, next) => {
    throw new Error("Some error occurred");
    const { name, email, dob, photo, gender, _id } = req.body;
    console.log(name, email, dob, photo, gender, _id);
    await user_1.User.create({
        name,
        email,
        dob,
        photo,
        gender,
        _id,
    });
    res.status(201).json({
        status: "success",
        message: "User created successfully",
    });
});
