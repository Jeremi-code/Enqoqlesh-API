import express from "express";
import {
  getCategories,
  getCategory,
  updateCategory,
  registerCategory,
  deleteCategory,
} from "../controller/categoryController.js";
const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.get("/category/:category", getCategory);
categoryRouter.post("/category", registerCategory);
categoryRouter.put("/category/:category", updateCategory);
categoryRouter.delete("/category/:category", deleteCategory);

export default categoryRouter;
