import { registers } from "../database";
import { IRegister } from "../interfaces/registers";

const listRegisterService = (): IRegister[] => {
  return registers;
};

export default listRegisterService;
