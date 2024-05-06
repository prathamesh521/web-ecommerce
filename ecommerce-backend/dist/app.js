"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const features_1 = require("./utils/features");
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
// Importing routes
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const port = 3000;
(0, features_1.connectDB)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('API working fine!');
});
app.use('/api/vi/user/', user_1.default);
app.use(errorMiddleware_1.errorMiddleware);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
