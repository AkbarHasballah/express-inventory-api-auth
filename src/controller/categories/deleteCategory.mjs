import { deleteCategoryServices } from "../../services/categories/deleteCategoriesServices.mjs";

export const deleteCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const category = await deleteCategoryServices(id);
    res.status(200).json({ msg: "Category deleted successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category" });
  }
};
