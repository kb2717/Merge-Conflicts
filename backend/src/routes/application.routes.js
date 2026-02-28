import { Router } from "express";
import {
  createApplication,
  updateApplicationStatus,
  getUserApplications
} from "../controllers/application.controller.js";

const router = Router();

router.post("/", createApplication);
router.patch("/:id", updateApplicationStatus);
router.get("/", getUserApplications);

export default router;