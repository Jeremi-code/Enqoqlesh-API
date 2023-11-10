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
categoryRouter.get("/category/:name", getCategory);
categoryRouter.post("/category", registerCategory);
categoryRouter.put("/category/:id", updateCategory);
categoryRouter.delete("/category/:id", deleteCategory);

export default categoryRouter;
