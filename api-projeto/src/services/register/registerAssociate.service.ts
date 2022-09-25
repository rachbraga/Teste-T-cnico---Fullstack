import AppDataSource from "../../data-source";
import { Associate } from "../../entities/associate.entity";
import { Register } from "../../entities/register.entity";
import { AppError } from "../../errors/AppError";

const registerAnimalsService = async (id: string): Promise<Associate[]> => {
  const registerRepository = AppDataSource.getRepository(Register);

  const registers = await registerRepository.find();

  const register = registers.find((element) => element.id === id);

  if (!register) {
    throw new AppError("Registro não encontrado.", 404);
  }

  return register!.associate;
};

export default registerAnimalsService;
