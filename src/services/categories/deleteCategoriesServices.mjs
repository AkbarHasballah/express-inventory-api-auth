import { deleteCategory } from "../../repositories/categories/categoriesRepository.mjs";

export const deleteCategoryServices = async (id) => {
  try {
    const category = await deleteCategory(id);
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};
