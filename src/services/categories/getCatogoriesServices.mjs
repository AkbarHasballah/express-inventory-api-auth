import { getAllCategories, getCategoriesById } from "../../repositories/categories/categoriesRepository.mjs";

export const getCategories = async () => {
  try {
    const categories = await getAllCategories();
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findCategoriesById = async (id) => {
  try {
    const categories = await getCategoriesById(id);

    if (!categories) {
      throw new Error("Category not found");
    }

    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
};

