"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminOnly = void 0;
const user_1 = require("../models/user");
const utility_class_1 = __importDefault(require("../utils/utility-class"));
const errorMiddleware_1 = require("./errorMiddleware");
exports.adminOnly = (0, errorMiddleware_1.TryCatch)(async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
        return next(new utility_class_1.default(400, "Please provide an id"));
    }
    const user = await user_1.User.findById(id);
    if (!user) {
        return next(new utility_class_1.default(404, "User not found"));
    }
    if (user.role !== "admin") {
        return next(new utility_class_1.default(403, "You are not authorized to perform this action"));
    }
    next();
});
