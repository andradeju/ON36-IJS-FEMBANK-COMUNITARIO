import { Conta } from "../contas/conta.model";
import { Usuario } from "../feature02/Usuario";

export class Cliente extends Usuario {
  contas: Conta[] = [];
  
  constructor(
    id: number,
    nomeCompleto: string,
    cpf: string,
    data_nascimento: Date,
    endereco: string,
    telefone: string,
    email: string
  ) {
    super(id, nomeCompleto, cpf, data_nascimento, endereco, telefone, email)
  }
}