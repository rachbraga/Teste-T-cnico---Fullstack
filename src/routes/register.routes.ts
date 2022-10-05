import { Router } from "express";
import {
  createRegisterController,
  deleteRegsiterController,
  listRegisterController,
  updateRegisterController,
} from "../controllers/register.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyIdMiddleware from "../middlewares/verifyId.middleware";

const userRoutes = Router();

userRoutes.post("", createRegisterController);
userRoutes.get("", ensureAuthMiddleware, listRegisterController);
userRoutes.delete(
  "/:registerId",
  ensureAuthMiddleware,
  verifyIdMiddleware,
  deleteRegsiterController
);
userRoutes.patch(
  "/:registerId",
  ensureAuthMiddleware,
  verifyIdMiddleware,
  updateRegisterController
);

export default userRoutes;
