import AppDataSource from "../../data-source";
import { Associate } from "../../entities/associate.entity";
import { AppError } from "../../errors/AppError";

const listAssociateSingleService = async (id: string): Promise<Associate> => {
  const AssociateRepository = AppDataSource.getRepository(Associate);
  const associate = await AssociateRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      register: true,
    },
  });

  if (!associate) {
    throw new AppError("Associado não encontrado", 404);
  }

  return associate;
};

export default listAssociateSingleService;
