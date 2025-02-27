import { createProduct } from "../../repositories/product/productRepository.mjs";

export const CreateProduct = async (name, categoryId, quantity, price) => {
  if (!name || !categoryId || quantity < 0 || price < 0) {
    throw new Error("Invalid input");
  }
  try {
    const product = await createProduct(name, categoryId, quantity, price);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};
