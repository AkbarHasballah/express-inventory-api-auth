import express from "express";
import { postCategoriesController } from "../controller/categories/postCategory.mjs";
import { getAllCategories } from "../controller/categories/getCategory.mjs";
import { getCategoriesById } from "../controller/categories/getCategory.mjs";
import { updateCategoryController } from "../controller/categories/updateCategory.mjs";
import { deleteCategory } from "../controller/categories/deleteCategory.mjs";
import { authMiddleware } from "../middleware/authMiddleware.mjs";
import { roleMiddleware } from "../middleware/roleMiddleware.mjs";

const router = express.Router();

router.post("/create-category", authMiddleware, roleMiddleware(["admin"]), postCategoriesController);
router.get("/getAll-categories", getAllCategories);
router.get("/categoriesId", getCategoriesById);
router.put("/categories", authMiddleware, roleMiddleware(["admin"]), updateCategoryController);
router.delete("/categories", authMiddleware, roleMiddleware(["admin"]), deleteCategory);

export default router;
