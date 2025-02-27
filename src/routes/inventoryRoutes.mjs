import express from 'express';
import { getInventoryStats, getLowStockProducts, getTotalAssetValue } from "../controller/Inventory.mjs";

const router = express.Router();

router.get('/stats', getInventoryStats);
router.get('/low-stock', getLowStockProducts);
router.get('/total-value', getTotalAssetValue);

export default router;
