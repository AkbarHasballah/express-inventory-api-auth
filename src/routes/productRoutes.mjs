import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controller/products.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';
import { roleMiddleware } from '../middleware/roleMiddleware.mjs';

const router = express.Router();

router.post(
  '/create-product',
  authMiddleware,
  roleMiddleware(['admin']),
  createProduct
);
router.get('/getAll-products', getProducts);
router.get('/getproduct', getProductById);
router.put(
  '/edit-product',
  authMiddleware,
  roleMiddleware(['admin']),
  updateProduct
);
router.delete(
  '/delete-products',
  authMiddleware,
  roleMiddleware(['admin']),
  deleteProduct
);

export default router;
