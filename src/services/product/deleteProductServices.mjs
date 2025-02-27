import { deleteProductById } from "../../repositories/product/productRepository.mjs";

export const deleteProductServices = async (id) => {
  try {
    const product = await deleteProductById(id);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};
