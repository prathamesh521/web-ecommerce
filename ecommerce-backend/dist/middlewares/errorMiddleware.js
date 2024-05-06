"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryCatch = exports.errorMiddleware = void 0;
const errorMiddleware = (error, req, res, next) => {
    error.message = error.message || 'Internal server error';
    error.statusCode = error.statusCode || 500;
    res.status(400).json({
        success: false,
        message: error.message
    });
};
exports.errorMiddleware = errorMiddleware;
const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
exports.TryCatch = TryCatch;
