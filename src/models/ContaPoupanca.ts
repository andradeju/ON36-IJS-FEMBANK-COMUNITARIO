import { Conta } from "./Conta";
import { Cliente } from "./Cliente";
import { IConta } from "../interfaces/IConta";


export class ContaPoupanca extends Conta {
  private taxaJuros: number;

  constructor(
    numeroConta: string,
    saldoInicial: number,
    dataAbertura: Date,
    taxaJuros: number,
    cliente: Cliente
  ) {
    super(numeroConta, saldoInicial, dataAbertura, cliente);
    this.taxaJuros = taxaJuros;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito realizado: R$${valor}. Saldo atual: R$${this.saldo}`);
}

public sacar(valor: number): void {
    if(valor > this.saldo) {
      console.log("Saldo insuficiente");
      return;
} 
  this.saldo -= valor;
  console.log(`Saque realizado: R$${valor}. Saldo atual: R$${this.saldo}`); 
}

public transferir(destino: IConta, valor: number): void {
  if(valor > this.saldo){
    console.log("Saldo insuficiente");
    return;
  }
  
}
}