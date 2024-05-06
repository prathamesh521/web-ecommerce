import { error } from "console";
import { NextFunction, Request, Response} from "express";
import ErrorHandler from "../utils/utility-class";
import { ControllerType } from "../types/types";

export const errorMiddleware = (error: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    error.message = error.message || 'Internal server error';
    error.statusCode = error.statusCode || 500;

    res.status(400).json({ 
        success: false,
        message: error.message });
};

export const TryCatch =
  (func: ControllerType) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next)).catch(next);
  };
