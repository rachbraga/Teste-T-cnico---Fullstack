import { NextFunction, Request, Response } from "express";

const verifyFieldsAssociateCreateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nome, email, telefone, registerId } = req.body;

  if (!nome || !email || !telefone || !registerId) {
    return res.status(401).json({
      message: "é necessário preencher todos os campos.",
    });
  }

  next();
};

export default verifyFieldsAssociateCreateMiddleware;
