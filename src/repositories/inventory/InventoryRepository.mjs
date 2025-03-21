import prisma from "../../utils/prisma.mjs";

export const countProduct = async () => {
  return await prisma.product.count();
};

export const countCategory = async () => {
  return await prisma.category.count();
};

export const getStockProduct = async () => {
  return await prisma.product.findMany({
    where: {
      quantity: { lt: 5 }, // products with quantity less than 5
    },
  });
};

export const totalValue = async () => {
  return await prisma.product.aggregate({
    _sum: {
      price: true,
    },
  });
};

export const totalQuantity = async () => {
  return await prisma.product.aggregate({
    _sum: {
      quantity: true,
    },
  });
};
