import { getProducts, getProductById } from "../../services/product/getProductServices.mjs";

export const getProduct = async (req, res) => {
  try {
    const product = await getProducts();
    res.status(200).json({ msg: "Product fetched successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

export const getProductWithId = async (req, res) => {
  const { id } = req.body;
  try {
    const product = await getProductById(id);
    res.status(200).json({ msg: "Product fetched successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};
