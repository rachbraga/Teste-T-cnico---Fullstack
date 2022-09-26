import AppDataSource from "../../data-source";
import { Register } from "../../entities/register.entity";
import { AppError } from "../../errors/AppError";
import { IRegister, IRegisterUpdate } from "../../interfaces/registers";

const registerUpdateService = async ({
  id,
  nome,
  email,
  telefone,
}: IRegisterUpdate) => {
  const registerRepository = AppDataSource.getRepository(Register);

  const register = await registerRepository.findOneBy({ id });
  console.log(register);
  if (!register) {
    throw new AppError("Registro não encontrado.", 404);
  }

  const newregister = {
    nome: nome || register.nome,
    email: email || register.email,
    telefone: telefone || register.telefone,
  };

  await registerRepository.update(register!.id, { ...newregister });

  return newregister;
};

export default registerUpdateService;
