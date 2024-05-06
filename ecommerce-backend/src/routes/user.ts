import express from 'express';
import { createUser } from '../controllers/userController';

const app = express();

app.post('/new', createUser);

export default app;