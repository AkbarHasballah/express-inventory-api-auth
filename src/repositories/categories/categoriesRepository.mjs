import prisma from "../../utils/prisma.mjs";

export const createCategory = async (name) => {
  return await prisma.category.create({
    data: {
      name,
    },
  });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany();
};

export const getCategoriesById = async (id) => {
  return await prisma.category.findUnique({
    where: {
      id,
    },
  });
};
export const editCategory = async (id, name) => {
  return await prisma.category.update({
    where: { id },
    data: { name },
  });
};

export const deleteCategory = async (id) => {
  return await prisma.category.delete({
    where: { id },
  });
};
