import { Cliente } from "../clientes/cliente.model";

export enum ContaTipo {
  CORRENTE = 'conta corrente',
  POUPANCA = 'poupança'
}


export class Conta {
  id: number;
  numeroConta: string;
  saldo: number;
  tipo: ContaTipo
  clienteId: Cliente['id'];

  constructor(
    id: number,
    numeroConta: string,
    saldo: number,
    tipo: ContaTipo,
    clienteId: number
  ){
    this.id = id;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.clienteId = clienteId;
  }
}