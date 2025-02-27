import express from "express";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.mjs";
import categoryRoutes from "./src/routes/categoriesRoutes.mjs";
import inventoryRoutes from "./src/routes/inventoryRoutes.mjs";
import productRoutes from "./src/routes/productRoutes.mjs";
import transactionsRoutes from "./src/routes/transactionsRoutes.mjs";
import { apiLimiter } from "./src/middleware/rateLimiter.mjs";

dotenv.config();
const app = express()
app.use(express.json())

//routes
app.use("/api/auth",apiLimiter, authRoutes);
app.use("/api/category",apiLimiter, categoryRoutes);
app.use("/api/inventory",apiLimiter, inventoryRoutes);
app.use("/api/product" ,apiLimiter, productRoutes);
app.use("/api/transactions",apiLimiter, transactionsRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});