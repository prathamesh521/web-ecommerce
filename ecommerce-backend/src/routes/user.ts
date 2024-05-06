import express from 'express';
import { createUser, getAllUsers, getUser, deleteUser } from '../controllers/userController';
import { adminOnly } from '../middlewares/auth';

const app = express();


// route - /api/v1/user/new
app.post("/new", createUser);

// Route - /api/v1/user/all
app.get("/all", adminOnly, getAllUsers);

// Route - /api/v1/user/dynamicID
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);

export default app;