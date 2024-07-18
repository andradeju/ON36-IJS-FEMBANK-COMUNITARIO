import { Pessoa } from "./Pessoa";
import { IConta } from "../interfaces/IConta";

export class Cliente extends Pessoa {

  protected contas: IConta[] = [];

  constructor(
    nomeCompleto: string,
    cpf: string,
    data_nascimento: Date,
    endereco: string,
    telefone: string,
    email: string
  ) {
    super(nomeCompleto, cpf, data_nascimento, endereco, telefone, email);
    this.contas = [];
  }

}