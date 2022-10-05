import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import { Associate } from "../../entities/associate.entity";
import { AppError } from "../../errors/AppError";

const deleteAssociateService = async (associateId: string): Promise<void> => {
  const associateRepository = AppDataSource.getRepository(Associate);

  const associate = await associateRepository.findOneBy({
    id: associateId,
  });
  if (!associate) {
    throw new AppError("Registro não identificado", 404);
  }

  if (!associate.ativo) {
    throw new AppError("Registro inativo", 400);
  }

  associate.ativo = false;
  await associateRepository.save(associate);
};
export default deleteAssociateService;
