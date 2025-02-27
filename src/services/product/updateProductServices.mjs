import { updateProduct } from "../../repositories/product/productRepository.mjs";

export const editProduct = async (id, name, categoryId, quantity, price) => {
  try {
    const product = await updateProduct(id, name, categoryId, quantity, price);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};
