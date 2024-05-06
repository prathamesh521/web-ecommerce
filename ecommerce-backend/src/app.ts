import express from "express";
import { connectDB } from "./utils/features";
import { errorMiddleware } from "./middlewares/errorMiddleware";


// Importing routes
import userRote from "./routes/user";
import { error } from "console";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());    

app.get('/', (req, res) => {
    res.send('API working fine!');
});

app.use('/api/vi/user/', userRote);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
