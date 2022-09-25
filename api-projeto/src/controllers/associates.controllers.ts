import { Request, Response } from "express";
import { IAssociate, IAssociateRequest } from "../interfaces/associates";
import createAssociateService from "../services/associate/associate.services";
import deleteAssociateService from "../services/associate/deleteAssociate.service";
import listAssociateService from "../services/associate/listAssociates.services";
import listAssociateSingleService from "../services/associate/listAssociateSingle.service";
import associateUpdateService from "../services/associate/updateAssociate.service";
import { instanceToPlain } from "class-transformer";

const createAssociateController = async (req: Request, res: Response) => {
  const { nome, email, telefone, registerId } = req.body;
  const newAssociate = await createAssociateService(
    nome,
    email,
    telefone,
    registerId
  );
  return res.json(instanceToPlain(newAssociate));
};

const listAssociateController = async (req: Request, res: Response) => {
  const associates = await listAssociateService();
  return res.json(instanceToPlain(associates));
};

const listAssociateSingleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const associate = await listAssociateSingleService(id);
  return res.json(instanceToPlain(associate));
};
const deleteAssociateController = async (req: Request, res: Response) => {
  const registerId = req.params.associateId;
  await deleteAssociateService(registerId);

  return res.status(200).send();
};

const updateAssociateController = async (req: Request, res: Response) => {
  const id = req.params.associateId;
  const { nome, email, telefone }: IAssociate = req.body;

  const associate = await associateUpdateService({ id, nome, email, telefone });

  return res.status(200).send(associate);
};

export {
  createAssociateController,
  listAssociateController,
  listAssociateSingleController,
  deleteAssociateController,
  updateAssociateController,
};
