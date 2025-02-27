import express from 'express';
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '../controller/categories.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';
import { roleMiddleware } from '../middleware/roleMiddleware.mjs';

const router = express.Router();

router.post(
  '/create-category',
  authMiddleware,
  roleMiddleware(['admin']),
  createCategory
);
router.get('/getAll-categories', getCategories);
router.get('/categories/:id', getCategoryById);
router.put('/categories',
  authMiddleware,
  roleMiddleware(['admin']),
  updateCategory
);
router.delete(
  '/categories',
  authMiddleware,
  roleMiddleware(['admin']),
  deleteCategory
);

export default router;
