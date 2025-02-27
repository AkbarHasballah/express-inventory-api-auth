import prisma from "../utils/prisma.mjs";

// Create Product
export const createProduct = async (req, res) => {
  const { name, categoryId, quantity, price } = req.body;

  if (!name || !categoryId || quantity < 0 || price < 0) {
    return res.status(400).json({ message: "Invalid input" });
  }

  try {
    const product = await prisma.product.create({
      data: {
        name,
        categoryId,
        quantity,
        price,
      },
    });

    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Get all Products
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      }, // Include category details in the response
    });
    res.status(200).json({
      status: "success",
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Get Product by ID
export const getProductById = async (req, res) => {
  const { id } = req.body;

  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true }, // Include category details in the response
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      status: "success",
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const { id } = req.body;
  const { name, categoryId, quantity, price } = req.body;

  try {
    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        categoryId,
        quantity,
        price,
      },
    });

    res.status(201).json({
      status: "success",
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  const { id } = req.body;

  try {
    const product = await prisma.product.delete({
      where: { id },
    });

    res.json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
