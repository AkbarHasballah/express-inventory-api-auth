import { deleteProductServices } from "../../services/product/deleteProductServices.mjs";

export const deleteProductController = async (req, res) => {
    const { id } = req.body;
    try {
        const product = await deleteProductServices(id);
        res.status(200).json({ msg: "Product deleted successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product" });
    }
};