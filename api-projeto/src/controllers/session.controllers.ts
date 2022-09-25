import { Request, Response } from "express";
import createRegisterSessionService from "../services/sessions/createSessionRegister.service";

const createRegisterSessionController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await createRegisterSessionService({ email, password });

  return res.json({ token });
};

export default createRegisterSessionController;
