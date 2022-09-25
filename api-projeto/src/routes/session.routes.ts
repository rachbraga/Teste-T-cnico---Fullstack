import { Router } from "express";
import createRegisterSessionController from "../controllers/session.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", createRegisterSessionController);

export default sessionRoutes;
