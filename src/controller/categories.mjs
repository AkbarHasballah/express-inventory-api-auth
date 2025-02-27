import prisma from "../utils/prisma.mjs";

// Create Category
export const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    const category = await prisma.category.create({
      data: { name },
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error creating category" });
  }
};

// Get all Categories
export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};

// Get Category by ID
export const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category" });
  }
};

// Update Category
export const updateCategory = async (req, res) => {
  const { id, name } = req.body;

  try {
    const category = await prisma.category.update({
      where: { id },
      data: { name },
    });

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Error updating category" });
  }
};

// Delete Category
export const deleteCategory = async (req, res) => {
  const { id } = req.body;

  try {
    const category = await prisma.category.delete({
      where: { id },
    });

    res.json({ message: "Category deleted successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category" });
  }
};
