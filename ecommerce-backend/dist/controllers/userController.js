"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const utility_class_1 = __importDefault(require("../utils/utility-class"));
const errorMiddleware_1 = require("../middlewares/errorMiddleware");
exports.createUser = (0, errorMiddleware_1.TryCatch)(async (req, res, next) => {
    const { name, email, dob, photo, gender, _id } = req.body;
    let user = await user_1.User.findById(_id);
    if (user) {
        return res.status(200).json({
            status: "success",
            message: "User created successfully",
        });
    }
    if (!_id || !name || !email || !photo || !gender || !dob)
        return next(new utility_class_1.default(400, "Please add all fields"));
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
exports.getAllUsers = (0, errorMiddleware_1.TryCatch)(async (req, res, next) => {
    const users = await user_1.User.find();
    res.status(201).json({
        status: "success",
        users,
    });
});
exports.getUser = (0, errorMiddleware_1.TryCatch)(async (req, res, next) => {
    const id = req.params.id;
    const user = await user_1.User.findById(id);
    if (!user)
        return next(new utility_class_1.default(400, "Invalid Id"));
    return res.status(200).json({
        success: true,
        user,
    });
});
exports.deleteUser = (0, errorMiddleware_1.TryCatch)(async (req, res, next) => {
    const id = req.params.id;
    const user = await user_1.User.findById(id);
    if (!user)
        return next(new utility_class_1.default(400, "Invalid Id"));
    await user.deleteOne();
    return res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
    });
});
