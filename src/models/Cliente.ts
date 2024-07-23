import { Usuario } from "./Usuario";
import { IConta } from "../interfaces/IConta";

export class Cliente extends Usuario {

  private contas: IConta[] = [];

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

  public adicionarConta(conta: IConta): void {
    this.contas.push(conta);
  }

}