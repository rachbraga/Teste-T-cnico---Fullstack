import AppDataSource from "../../data-source";
import { Register } from "../../entities/register.entity";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { IRegisterLogin } from "../../interfaces/registers";
import { AppError } from "../../errors/AppError";
import "dotenv/config";
import bcryptjs from "bcryptjs";

const createRegisterSessionService = async ({
  email,
  password,
}: IRegisterLogin): Promise<string> => {
  const registerRepository = AppDataSource.getRepository(Register);

  const register = await registerRepository.findOne({
    where: {
      email: email,
    },
  });

  if (!register) {
    throw new AppError("Dados inválidos.", 401);
  }

  if (!register.ativo) {
    throw new AppError("Registro inativo.", 400);
  }

  const passwordMatch = await compare(password, register.password);

  if (!bcryptjs.compareSync(password, register.password)) {
    throw new AppError("Dados inválidos.", 401);
  }

  const token = jwt.sign(
    {
      id: register.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default createRegisterSessionService;
