import e, { NextFunction, Request, Response } from "express";
import { NewUserRequestBody } from "../types/types";
import { User } from "../models/user";
import ErrorHandler from "../utils/utility-class";
import { TryCatch } from "../middlewares/errorMiddleware";

export const createUser = TryCatch(
  async (
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {

    const { name, email, dob, photo, gender, _id } = req.body;

    let user = await User.findById(_id);

    if(user) {
        return res.status(200).json({
            status: "success",
            message: "User created successfully",
        });
    }

    if (!_id || !name || !email || !photo || !gender || !dob)
        return next(new ErrorHandler(400, "Please add all fields"));


    await User.create({
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
  }
);

export const getAllUsers = TryCatch(
  async (
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const users = await User.find();

    res.status(201).json({
      status: "success",
      users,
    });
  }
);

export const getUser = TryCatch(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
  
    if (!user) return next(new ErrorHandler(400, "Invalid Id"));
  
    return res.status(200).json({
      success: true,
      user,
    });
  });
  
  export const deleteUser = TryCatch(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
  
    if (!user) return next(new ErrorHandler(400, "Invalid Id"));
  
    await user.deleteOne();
  
    return res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  });