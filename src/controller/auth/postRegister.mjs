import { Register } from "../../services/auth/postRegisterServices.mjs";

export const RegisterController = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    const result = await Register(email, password, name, role);
    res.status(200).json({ msg: "register success", data: result });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
