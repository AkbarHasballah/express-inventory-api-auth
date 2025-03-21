import { CreateCategory } from "../../services/categories/postCategoriesServices.mjs";

export const postCategoriesController = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await CreateCategory(name);
    res.status(201).json({ msg: "Category created successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error creating category" });
  }
};
