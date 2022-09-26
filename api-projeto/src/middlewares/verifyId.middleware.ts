import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Register } from "../entities/register.entity";

const verifyIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const registerRepository = AppDataSource.getRepository(Register);

  const register = req.register;
  console.log(register);

  const { registerId } = req.params;

  const registers = await registerRepository.find();

  const idExist = registers.find((register) => register.id === registerId);

  if (!idExist) {
    return res.status(404).json({ message: "Registro não encontrado" });
  }

  if (registerId !== register.id) {
    return res.status(401).json({
      message: "Permissão negada",
    });
  }

  next();
};

export default verifyIdMiddleware;
