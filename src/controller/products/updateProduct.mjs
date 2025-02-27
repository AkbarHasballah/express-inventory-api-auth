import { editProduct } from "../../services/product/updateProductServices.mjs";

export const updateProduct = async (req, res) => {
  const { id, name, categoryId, quantity, price } = req.body;
  try {
    const product = await editProduct(id, name, categoryId, quantity, price);
    return res.status(200).json({ msg: "Product updated successfully", product });
  } catch (error) {
    return res.status(500).json({ message: "Error updating product" });
  }
};
