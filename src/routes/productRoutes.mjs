import express from "express";
import { postProduct } from "../controller/products/postProduct.mjs";
import { getProduct, getProductWithId } from "../controller/products/getproduct.mjs";
import { updateProduct } from "../controller/products/updateProduct.mjs";
import { deleteProductController } from "../controller/products/deleteProduct.mjs";
import { authMiddleware } from "../middleware/authMiddleware.mjs";
import { roleMiddleware } from "../middleware/roleMiddleware.mjs";

const router = express.Router();

router.post("/create-product", authMiddleware, roleMiddleware(["admin"]), postProduct);
router.get("/getAll-products", getProduct);
router.get("/getproduct", getProductWithId);
router.put("/edit-product", authMiddleware, roleMiddleware(["admin"]), updateProduct);
router.delete("/delete-products", authMiddleware, roleMiddleware(["admin"]), deleteProductController);

export default router;
