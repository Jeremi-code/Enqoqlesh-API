import express from "express";
import {
  getCategories,
  getCategory,
  updateCategory,
  registerCategory,
  deleteCategory,
} from "../controller/categoryController.js";
import { apiKeyMiddleware} from "../middleware/authMiddleware.js";
const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.get("/category/:category", getCategory);
categoryRouter.post("/category",apiKeyMiddleware, registerCategory);
categoryRouter.put("/category/:category", updateCategory);
categoryRouter.delete("/category/:category", deleteCategory);

export default categoryRouter;
