import { Router } from "express";
import { loginUser, resetPassword, registerUser,  } from "../../controllers/authControllers.js";

const authRoutes = Router()

authRoutes.post("/registerUser", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.post("/reset-password", resetPassword);

authRoutes.post("/forgot-password");

export default authRoutes