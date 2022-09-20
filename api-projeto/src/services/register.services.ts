import { IRegister, IRegisterRequest } from "../interfaces/registers";
import { registers } from "../database";
import { v4 as uuidv4 } from "uuid";

const createRegisterService = ({
  nome,
  email,
  telefone,
  data_registro,
}: IRegisterRequest): IRegister => {
  const newRegister: IRegister = {
    id: uuidv4(),
    nome,
    email,
    telefone,
    data_registro,
  };
  registers.push(newRegister);
  return newRegister;
};

export default createRegisterService;
