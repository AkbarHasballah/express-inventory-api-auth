import prisma from "../../utils/prisma.mjs";

export const createProduct = async (name, categoryId, quantity, price) => {
  return await prisma.product.create({
    data: {
      name,
      categoryId,
      quantity,
      price,
    },
  });
};

export const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      category: {
        seletct: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const getProductId = async (id) => {
  return await prisma.product.findUnique({
    where: {
      id,
    },
    include: { category: true },
  });
};

export const updateProduct = async (id, name, categoryId, quantity, price) => {
  return await prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      categoryId,
      quantity,
      price,
    },
  });
};

export const deleteProductById = async (id) => {
  return await prisma.product.delete({
    where: {
      id,
    },
  });
};
