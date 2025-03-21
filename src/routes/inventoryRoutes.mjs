import express from 'express';
import {inventoryStats} from '../controller/inventory/getIventory.mjs';
import {lowStockProduct} from '../controller/inventory/getStockProduct.mjs';
import {totalAssetValue} from '../controller/inventory/getTotalAssetsValue.mjs';

const router = express.Router();

router.get('/stats', inventoryStats);
router.get('/low-stock', lowStockProduct);
router.get('/total-value', totalAssetValue);

export default router;
