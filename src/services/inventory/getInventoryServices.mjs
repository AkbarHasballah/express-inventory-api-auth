import { countProduct, countCategory } from "../../repositories/inventory/inventoryRepository.mjs";

export const getInventoryStats = async () => {
  try {
    const totalProducts = await countProduct();
    const totalCategories = await countCategory();
    return totalCategories, totalProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};
