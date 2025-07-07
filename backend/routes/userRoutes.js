import express from "express";
import { getProfile, updateProfile,getAllUsers } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET current user profile
router.get("/me", authMiddleware, getProfile);

// UPDATE current user profile
router.put("/me", authMiddleware, updateProfile);

router.get("/getAllUsers",authMiddleware,getAllUsers);

export default router;
