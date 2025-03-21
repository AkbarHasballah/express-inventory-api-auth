import { getLowStockProducts } from "../../services/inventory/getInventoryServices.mjs";

export const lowStockProduct = async (req, res) => {
  try {
    const product = await getLowStockProducts();
    res.status(200).json({ msg: "success get Low Stock Product", product });
  } catch (error) {
    res.status(500).json({ message: "error fetching low stock product" });
  }
};
