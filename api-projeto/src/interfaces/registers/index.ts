export interface IRegisterRequest {
  nome: string;
  email: string;
  telefone: number;
  data_registro: Date;
}

export interface IRegister {
  id: string;
  nome: string;
  email: string;
  telefone: number;
  data_registro: Date;
}
