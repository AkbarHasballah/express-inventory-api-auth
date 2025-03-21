import { getAllProducts, getProductId } from "../../repositories/product/productRepository.mjs";

export const getProducts = async () => {
  try {
    const products = await getAllProducts();
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const product = await getProductId(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    if (error.message === "Product not found") {
      throw new Error(error.message);
    } else {
      throw new Error("Error fetching product");
    }
  }
};
