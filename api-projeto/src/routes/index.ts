import { Router } from "express";
import {
  createRegisterController,
  listRegisterController,
} from "../controllers/register.controllers";

const userRoutes = Router();

userRoutes.post("", createRegisterController);
userRoutes.get("", listRegisterController);

export default userRoutes;
