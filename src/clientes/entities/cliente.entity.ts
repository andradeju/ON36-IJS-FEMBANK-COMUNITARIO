import { Conta } from "../../contas/entities/conta.entity";
import { Usuario } from "../../common/Usuario";

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




//Verificar o possível uso
// import { Usuario } from "../common/Usuario";
// import { IConta } from "../interfaces/IConta";

// export class Cliente extends Usuario {

//   private contas: IConta[] = [];

//   constructor(
//     id: number,
//     nomeCompleto: string,
//     cpf: string,
//     data_nascimento: Date,
//     endereco: string,
//     telefone: string,
//     email: string
//   ) {
//     super(id, nomeCompleto, cpf, data_nascimento, endereco, telefone, email);
//     this.contas = [];
//   }

//   public adicionarConta(conta: IConta): void {
//     this.contas.push(conta);
//   }

//   public listarContas(): IConta[] {
//     return this.contas;
//   }

// }