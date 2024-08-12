import { Conta } from "./conta.entity";
import { ContaTipo } from "../enum/conta-type.enum";
import { IConta } from "../interfaces/IConta";
import { Gerente } from "../../gerentes/entities/gerente.model";
import { Cliente } from "../../clientes/entities/cliente.entity";


export class ContaCorrente extends Conta {
  public limiteChequeEspecial: number;

  constructor(
    numeroConta: string, 
    saldo: number,
    tipo: ContaTipo,
    clienteId: Cliente['id'],
    gerenteId: Gerente['id'],
    limiteChequeEspecial: number,
    ) {
      super(numeroConta, saldo, tipo, clienteId, gerenteId)
      this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public depositar(valor: number): void {
      if(valor <= 0) {
        throw new Error("Valor de depósito inváido");
      }
        this.saldo += valor;
        console.log(`Depósito realizado: R$${valor}. Saldo atual: R$${this.saldo}`);
    }

    public sacar(valor: number): void {
        if(valor <= this.saldo + this.limiteChequeEspecial) {
          this.saldo -= valor;
    } else {
      throw new Error("Saldo insuficiente");
    }
  }

  public transferir(destino: IConta, valor: number): void {
    if(valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      destino.depositar(valor); 
  } else {
    throw new Error("Saldo insuficiente");
    }
  }
}