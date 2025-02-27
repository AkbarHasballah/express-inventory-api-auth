import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { findUserByEmail } from "../../repositories/auth/authRepository.mjs";

export const Login = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("invalid credentials");
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

    // Return hasil login
    return {
      data: {
        status: "success",
        username: user.name,
        id: user.id,
        role: user.role,
        token, // Sertakan grup dalam response
      },
    };
  } catch (error) {
    throw new Error("Login failed");
  }
};
