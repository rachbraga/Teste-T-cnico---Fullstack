export interface IRegisterRequest {
  nome: string;
  password: string;
  email: string;
  telefone: number;
  data_registro: string;
}

export interface IRegister {
  id: string;
  password: string;
  nome: string;
  email: string;
  telefone: number;
  data_registro: string;
  ativo: boolean;
}

export interface IRegisterUpdate {
  id: string;
  nome: string;
  email: string;
  telefone: number;
}

export interface IRegisterLogin {
  email: string;
  password: string;
}
