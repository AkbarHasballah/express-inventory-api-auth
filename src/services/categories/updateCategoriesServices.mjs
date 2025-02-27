import { editCategory } from "../../repositories/categories/categoriesRepository.mjs";

export const updateCategory = async (id, name) => {
  try {
    const categories = await editCategory(id, name);
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

