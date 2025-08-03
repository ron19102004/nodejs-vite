import { Router } from "express";
import definePrefix from "../utils/route.utils";
import authController from "../controllers/auth.controller.js";

const prefix = definePrefix("/auth");

const router = Router();

router.post(prefix("/login"), authController.login);

export default router;
