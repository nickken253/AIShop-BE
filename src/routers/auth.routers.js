import express from "express";
const router = express.Router();

import {
    login,
    register,
    refreshToken,
} from "../controllers/auth.controllers.js";

router.post("/login", login);
router.post("/register", register);
router.post("/refresh-token", refreshToken);

export default router;
