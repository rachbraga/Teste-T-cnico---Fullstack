import AppDataSource from "../../data-source";
import { Register } from "../../entities/register.entity";

const listRegisterService = async (): Promise<Register[]> => {
  const registerRepository = AppDataSource.getRepository(Register);

  const registers = await registerRepository.find();
  const registerActive = registers.filter(
    (register) => register.ativo === true
  );

  return registerActive;
};

export default listRegisterService;
