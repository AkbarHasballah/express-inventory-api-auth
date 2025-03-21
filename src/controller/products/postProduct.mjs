import { CreateProduct } from "../../services/product/postProductServices.mjs";

export const postProduct = async (req, res) => {
  const { name, categoryId, quantity, price } = req.body;
  try {
    const product = await CreateProduct(name, categoryId, quantity, price);
    res.status(201).json({ msg: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};
