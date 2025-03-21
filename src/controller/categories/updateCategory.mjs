import { updateCategory } from "../../services/categories/updateCategoriesServices.mjs";

export const updateCategoryController = async (req, res) => {
  const { id, name } = req.body;
  try {
    const category = await updateCategory(id, name);
    return res.status(200).json({ msg: "Category updated successfully", category });
  } catch (error) {
    return res.status(500).json({ message: "Error updating category" });
  }
};
