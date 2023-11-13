import express from "express";
import {
  getCategories,
  getCategory,
  updateCategory,
  registerCategory,
  deleteCategory,
} from "../controller/categoryController.js";
import { defaultRouteMiddleware} from "../middleware/authMiddleware.js";
const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategories);
categoryRouter.get("/category/:category", getCategory);
categoryRouter.post("/category", defaultRouteMiddleware, registerCategory);
categoryRouter.put("/category/:category", defaultRouteMiddleware, updateCategory);
categoryRouter.delete("/category/:category", defaultRouteMiddleware, deleteCategory);

export default categoryRouter;
