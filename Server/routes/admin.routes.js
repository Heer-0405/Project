import { Router } from "express";
import { AdminLogin } from "../controllers/admin.controllers.js";
import { AdminAutoLogin, AdminAutoToken } from "../middleware/AdminAuthToken.js";

export const adminRoute = Router()

adminRoute.route ("/login").post(AdminLogin)
adminRoute.route("/AdminAutoLogin").get(AdminAutoToken , AdminAutoLogin)