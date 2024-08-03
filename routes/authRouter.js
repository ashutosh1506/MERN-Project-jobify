import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";
const router = Router();
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: { msg: "IP rate limit exceeded, Try after 15 minutes." },
});

router.post("/login", apiLimiter, validateLoginInput, login);
router.post("/register", apiLimiter, validateRegisterInput, register);
router.get("/logout", logout);

export default router;
