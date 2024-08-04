import { Conta } from "./conta.entity";
import { ContaTipo } from "../enum/conta-type.enum";
import { IConta } from "../interfaces/IConta";
import { Gerente } from "../../gerentes/entities/gerente.model";
import { Cliente } from "../../clientes/entities/cliente.entity";


export class ContaPoupanca extends Conta {
  public taxaJuros: number;

  constructor(
    numeroConta: string, 
    saldo: number,
    tipo: ContaTipo,
    clienteId: Cliente['id'],
    gerenteId: Gerente['id'],
    taxaJuros: number,
  ) {
    super(numeroConta, saldo, tipo, clienteId, gerenteId);
    this.taxaJuros = taxaJuros;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito realizado: R$${valor}. Saldo atual: R$${this.saldo}`);
}

public sacar(valor: number): void {
    if(valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      throw new Error("Saldo insuficiente");
    }
}

public transferir(destino: IConta, valor: number): void {
  if(valor > this.saldo){
    this.saldo -= valor;
    destino.depositar(valor);
  } else {
    throw new Error("Saldo insuficiente");
  }  
}
}