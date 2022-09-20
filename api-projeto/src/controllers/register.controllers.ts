import { Request, Response } from "express";
import listRegisterService from "../services/listRegister.services";
import createRegisterService from "../services/register.services";

const createRegisterController = (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, data_registro } = req.body;
    const newRegister = createRegisterService({
      nome,
      email,
      telefone,
      data_registro,
    });
    return res.json(newRegister);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listRegisterController = (req: Request, res: Response) => {
  const register = listRegisterService();

  return res.json(register);
};

export { createRegisterController, listRegisterController };
