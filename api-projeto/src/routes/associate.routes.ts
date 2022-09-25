import { Router } from "express";
import {
  createAssociateController,
  deleteAssociateController,
  listAssociateController,
  listAssociateSingleController,
  updateAssociateController,
} from "../controllers/associates.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyFieldsAssociateCreateMiddleware from "../middlewares/verifyFieldsAssociateCreate.middleware";

const associateRoute = Router();

associateRoute.post(
  "",
  ensureAuthMiddleware,
  verifyFieldsAssociateCreateMiddleware,
  createAssociateController
);
associateRoute.get("", ensureAuthMiddleware, listAssociateController);
associateRoute.get(
  "/:associateId",
  ensureAuthMiddleware,
  listAssociateSingleController
);
associateRoute.patch(
  "/:associateId",
  ensureAuthMiddleware,
  updateAssociateController
);
associateRoute.delete(
  "/:associateId",
  ensureAuthMiddleware,
  deleteAssociateController
);

export default associateRoute;
