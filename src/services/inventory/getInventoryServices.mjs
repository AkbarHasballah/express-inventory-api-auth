import { countProduct, countCategory, getStockProduct, totalValue, totalQuantity } from "../../repositories/inventory/InventoryRepository.mjs";
export const getInventoryStats = async () => {
  try {
    const totalProducts = await countProduct();
    const totalCategories = await countCategory();
    return totalCategories, totalProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getLowStockProducts = async () => {
  try {
    const lowStockProduct = await getStockProduct();
    return lowStockProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getTotalAssetValue = async () => {
  try {
    const aggregateValue = await totalValue();
    const aggregateQuantity = await totalQuantity();
    const result = aggregateValue._sum.price * aggregateQuantity._sum.quantity;

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
