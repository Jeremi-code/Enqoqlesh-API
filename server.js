import express from "express";
import dotenv from "dotenv";
dotenv.config();
import categoryRouter from "./route/categoryRoute.js";
import questionRouter from "./route/questionRoute.js";
import connectDB from "./config/db.js";
import adminRouter from "./route/adminRoute.js";

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(categoryRouter);
app.use(questionRouter);
app.use(adminRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
