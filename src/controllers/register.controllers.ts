import { Request, Response } from "express";
import deleteRegisterService from "../services/register/deleteRegister.service";
import listRegisterService from "../services/register/listRegister.services";
import createRegisterService from "../services/register/register.services";
import { instanceToPlain } from "class-transformer";
import registerUpdateService from "../services/register/registerUpdate.service";
import { IRegister, IRegisterUpdate } from "../interfaces/registers";

const createRegisterController = async (req: Request, res: Response) => {
  const { nome, password, email, telefone, data_registro } = req.body;
  const newRegister = await createRegisterService({
    nome,
    password,
    email,
    telefone,
    data_registro,
  });
  return res.json(instanceToPlain(newRegister));
};

const listRegisterController = async (req: Request, res: Response) => {
  const register = await listRegisterService();

  return res.json(instanceToPlain(register));
};

const deleteRegsiterController = async (req: Request, res: Response) => {
  const registerId = req.params.registerId;
  await deleteRegisterService(registerId);

  return res.status(200).send();
};

const updateRegisterController = async (req: Request, res: Response) => {
  const id = req.params.registerId;
  const { nome, email, telefone }: IRegisterUpdate = req.body;

  const register = await registerUpdateService({ id, nome, email, telefone });

  return res.status(200).send(register);
};

export {
  createRegisterController,
  listRegisterController,
  deleteRegsiterController,
  updateRegisterController,
};
