import { createCategory } from "../../repositories/categories/categoriesRepository.mjs";

export const CreateCategory = async (name) => {
  if (!name) {
    throw new Error("Category name is required");
  }
  try {
    const category = await createCategory(name);
    return category;
  } catch (error) {
    throw new Error(error.message);
  }
};
