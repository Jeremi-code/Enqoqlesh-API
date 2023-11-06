import express from "express";
import {
  getCategories,
  getCategoryById,
  updateCategory,
  registerCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
const categoryRouter = express.Router();

router.get("/categories", getCategories);
router.get("/category/:id", getCategoryById);
router.post("/category", registerCategory);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

export default categoryRouter;
