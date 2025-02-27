import prisma from "../../utils/prisma.mjs";
import bcrypt from "bcryptjs";

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const createUser = async (email, password, name, role) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role || "staff",
    },
  });
};
