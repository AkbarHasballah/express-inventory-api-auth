import { transaction, updateProductIN, updateProductDE } from "../../repositories/transaction/transactionRepository.mjs";

export const createTransaction = async (productId, type, quantity, price) => {
  if (!productId || !type || !quantity || !price) {
    throw new Error("invalid input");
  }

  const totalValue = price * quantity;
  try {
    await transaction(productId, type, quantity, price, totalValue);

    if (type === "IN") {
      await updateProductIN(productId, quantity);
    } else if (type === "OUT") {
      await updateProductDE(productId, quantity);
    }
    return totalValue;
  } catch (error) {
    throw new Error(error.message);
  }
};
