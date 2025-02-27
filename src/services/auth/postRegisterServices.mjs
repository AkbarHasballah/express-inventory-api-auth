import { findUserByEmail, createUser } from "../../repositories/auth/authRepository.mjs";

export const Register = async (email, password, name, role) => {
  try {
    if (!email || !password || !name ) {
      throw new Error("Semua field harus diisi.");
    }
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw new Error("User already");
    }

    const newUser = await createUser(email, password, name, role);
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
