import express from "express";
import {
  getCategories,
  getCategoryById,
  updateCategory,
  registerCategory,
  deleteCategory,
} from "../controller/categoryController.js";
const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.get("/category/:id", getCategoryById);
categoryRouter.post("/category", registerCategory);
categoryRouter.put("/category/:id", updateCategory);
categoryRouter.delete("/category/:id", deleteCategory);

export default categoryRouter;
