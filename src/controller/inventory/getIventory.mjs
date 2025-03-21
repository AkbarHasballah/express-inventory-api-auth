import { getInventoryStats } from "../../services/inventory/getInventoryServices.mjs";

export const inventoryStats = async (req, res) => {
  try {
    const inventory = await getInventoryStats();
    res.status(200).json({ msg: "success", inventory });
  } catch (error) {
    res.status(500).json({ message: "error fetching inventory stats" });
  }
};

