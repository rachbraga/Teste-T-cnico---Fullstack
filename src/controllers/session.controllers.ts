import { Request, response, Response } from "express";
import createRegisterSessionService from "../services/sessions/createSessionRegister.service";

const createRegisterSessionController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await createRegisterSessionService({ email, password });

  return res.status(200).json(response);
};

export default createRegisterSessionController;
