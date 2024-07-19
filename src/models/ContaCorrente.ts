import { Conta } from "./Conta";
import { Cliente } from "./Cliente";
import { IConta } from "../interfaces/IConta";


export class ContaCorrente extends Conta {
  private limiteChequeEspecial: number;

  constructor(
    numeroConta: string, 
    saldoInicial: number,
    dataAbertura: Date,
    limiteChequeEspecial: number,
    cliente: Cliente
    ) {
      super(numeroConta, saldoInicial, dataAbertura, cliente)
      this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito realizado: R$${valor}. Saldo atual: R$${this.saldo}`);
    }

    public sacar(valor: number): void {
        if(valor > this.saldo + this.limiteChequeEspecial) {
          console.log("Saldo insuficiente");
          return;
    } 
    this.saldo -= valor;
    console.log(`Saque realizado: R$ ${valor}. Saldo atual: R$ ${this.saldo}`);  
  }

  public transferir(destino: IConta, valor: number): void {
      
  }
}