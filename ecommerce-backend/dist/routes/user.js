"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const auth_1 = require("../middlewares/auth");
const app = (0, express_1.default)();
// route - /api/v1/user/new
app.post("/new", userController_1.createUser);
// Route - /api/v1/user/all
app.get("/all", auth_1.adminOnly, userController_1.getAllUsers);
// Route - /api/v1/user/dynamicID
app.route("/:id").get(userController_1.getUser).delete(auth_1.adminOnly, userController_1.deleteUser);
exports.default = app;
