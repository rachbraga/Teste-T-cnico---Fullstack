import AppDataSource from "../../data-source";
import { v4 as uuidv4 } from "uuid";
import { Associate } from "../../entities/associate.entity";
import { AppError } from "../../errors/AppError";
import { Register } from "../../entities/register.entity";

const createAssociateService = async (
  nome: string,
  email: string,
  telefone: string,
  registerId: string
) => {
  const associateRepository = AppDataSource.getRepository(Associate);
  const registerRepository = AppDataSource.getRepository(Register);

  const registers = await registerRepository.find();

  const register = registers.find((element) => element.id === registerId);

  const findRepository = await associateRepository.findOne({
    where: {
      email: email,
    },
  });

  if (findRepository) {
    throw new AppError("Cadastro de associado já efetuado.", 400);
  }
  if (!register) {
    throw new AppError("Registro não encontrado", 404);
  }

  const associate = associateRepository.create({
    nome,
    email,
    telefone,
    ativo: true,
    register: register,
  });

  await associateRepository.save(associate);

  return associate;
};

export default createAssociateService;
