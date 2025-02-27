import { getCategories, findCategoriesById } from "../../services/categories/getCatogoriesServices.mjs";

export const getAllCategories = async (res) => {
  try {
    const category = await getCategories();
    res.json({ msg: "Categories fetched successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};

export const getCategoriesById = async (req, res) => {
  const { id } = req.body;
  try {
    const category = await findCategoriesById(id);
    res.json({ msg: "Category fetched successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};
