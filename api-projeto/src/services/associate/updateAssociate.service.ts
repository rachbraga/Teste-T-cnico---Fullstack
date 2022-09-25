import AppDataSource from "../../data-source";
import { Associate } from "../../entities/associate.entity";

import { IAssociate } from "../../interfaces/associates";

const associateUpdateService = async ({
  id,
  nome,
  email,
  telefone,
}: IAssociate) => {
  const associateRepository = AppDataSource.getRepository(Associate);

  const associate = await associateRepository.findOne({
    where: {
      id,
    },
  });

  if (!associate) {
    throw new Error("Associado não encontrado.");
  }

  nome ? (associate.nome = nome) : associate.nome;
  email ? (associate.email = email) : associate.email;
  telefone ? (associate.telefone = telefone) : associate.telefone;

  await associateRepository.update(associate.id, associate);

  return { message: `${associate.nome} foi modificado com sucesso!` };
};

export default associateUpdateService;
