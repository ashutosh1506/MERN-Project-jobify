import { Router } from "express";
import {
  createJob,
  deleteJob,
  updateJob,
  getAllJobs,
  getJob,
} from "../controllers/jobController.js";
const router = Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
