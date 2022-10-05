import AppDataSource from "../../data-source";
import { Associate } from "../../entities/associate.entity";
import { Register } from "../../entities/register.entity";

const listAssociateService = async (id: string) => {
  const registerRepository = AppDataSource.getRepository(Register);

  const registers = await registerRepository.find();
  const register = registers.find((user) => user.id === id);


  return register?.associate;
};

export default listAssociateService;
