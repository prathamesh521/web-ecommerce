import { User } from "../models/user";
import ErrorHandler from "../utils/utility-class";
import { TryCatch } from "./errorMiddleware";

export const adminOnly = TryCatch(async (req, res, next) => {
    const {id} = req.query;

    if(!id){
        return next(new ErrorHandler(400, "Please provide an id"));
    }

    const user = await User.findById(id);
    if(!user){
        return next(new ErrorHandler(404, "User not found"));
    }

    if(user.role !== "admin"){
        return next(new ErrorHandler(403, "You are not authorized to perform this action"));
    }

    next();
});
