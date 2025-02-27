import express from "express";
import { check } from "express-validator";
import { LoginController } from "../controller/auth/postLogin.mjs";
import { RegisterController } from "../controller/auth/postRegister.mjs";

const router = express.Router();

router.post("/register", [check("name", "name is required").not().isEmpty(), check("email", "Please include a valid email").isEmail(), check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 })], RegisterController);
router.post("/login", LoginController);

export default router;
