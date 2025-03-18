import prisma from "../../utils/prisma.mjs";

export const transaction = async (productId, type, quantity, price, totalValue) => {
  return await prisma.transaction.create({
    data: {
      productId,
      type,
      quantity,
      price,
      totalValue,
    },
  });
};

export const updateProductIN = async (id) => {
  return await prisma.product.update({
    where: { id },
    data: { quantity: { increment: quantity } },
  });
};

export const updateProductDE = async (id) => {
  return await prisma.product.update({
    where: { id },
    data: { quantity: { decrement: quantity } },
  });
};

export const getTransactions = async () => {
  return await prisma.transaction.findMany({
    include: { product: true },
  });
};
