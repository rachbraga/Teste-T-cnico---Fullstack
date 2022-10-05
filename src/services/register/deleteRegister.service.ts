import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import { Register } from "../../entities/register.entity";
import { AppError } from "../../errors/AppError";

const deleteRegisterService = async (registerId: string): Promise<void> => {
  const registerRepository = AppDataSource.getRepository(Register);

  const register = await registerRepository.findOneBy({
    id: registerId,
  });
  if (!register) {
    throw new AppError("Registro não identificado", 404);
  }

  if (!register.ativo) {
    throw new AppError("Registro inativo", 400);
  }

  register.ativo = false;
  await registerRepository.save(register);
};
export default deleteRegisterService;
