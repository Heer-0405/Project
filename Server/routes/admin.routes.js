import { Router } from "express";
import { AdminLogin } from "../controllers/admin.controllers.js";

export const adminRoute = Router()

adminRoute.route ("/login").post(AdminLogin)