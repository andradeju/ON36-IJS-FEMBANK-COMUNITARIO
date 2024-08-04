import { Usuario } from "../../common/Usuario";

export class Gerente extends Usuario {
  constructor(
    id: number,
    nomeCompleto: string,
    cpf: string,
    data_nascimento: Date,
    endereco: string,
    telefone: string,
    email: string
  ){
    super(id, nomeCompleto, cpf, data_nascimento, endereco, telefone, email);
  }
}