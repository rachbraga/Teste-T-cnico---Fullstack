import AppDataSource from "../../data-source";
import { Associate } from "../../entities/associate.entity";

const listAssociateService = async (): Promise<Associate[]> => {
  const associateRepository = AppDataSource.getRepository(Associate);
  const associates = await associateRepository.find();
  const associateActive = associates.filter(
    (associate) => associate.ativo === true
  );

  return associateActive;
};

export default listAssociateService;
