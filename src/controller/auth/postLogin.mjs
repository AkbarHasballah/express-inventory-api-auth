import { Login } from "../../services/auth/postLoginServices.mjs";

export const LoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await Login(email, password);
    res.status(200).json({ msg: "login success", data: result });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
