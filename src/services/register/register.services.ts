import { IRegisterRequest, IRegister } from "../../interfaces/registers";
import { v4 as uuidv4 } from "uuid";
import AppDataSource from "../../data-source";
import { Register } from "../../entities/register.entity";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/AppError";

const createRegisterService = async ({
  nome,
  password,
  email,
  telefone,
  data_registro,
}: IRegisterRequest): Promise<IRegister> => {
  const registerRepository = AppDataSource.getRepository(Register);

  const hashedPassword = await hash(password, 10);
  const findRepository = await registerRepository.findOne({
    where: {
      email: email,
    },
  });

  if (findRepository) {
    throw new AppError("Cadastro já efetuado.", 400);
  }

  const register = registerRepository.create({
    nome,
    password: hashedPassword,
    email,
    telefone,
    data_registro,
    ativo: true,
  });

  await registerRepository.save(register);

  return register;
};

export default createRegisterService;
