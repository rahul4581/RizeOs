import express from "express";
import { getJobs,postJob } from "../controllers/jobController.js";

const router = express.Router();

// Public route to fetch all jobs
router.get("/", getJobs);
router.post("/postJob",postJob);

export default router;
