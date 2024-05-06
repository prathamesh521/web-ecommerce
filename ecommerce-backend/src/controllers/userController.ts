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
    throw new Error("Some error occurred");
    const { name, email, dob, photo, gender, _id } = req.body;
    console.log(name, email, dob, photo, gender, _id);

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
