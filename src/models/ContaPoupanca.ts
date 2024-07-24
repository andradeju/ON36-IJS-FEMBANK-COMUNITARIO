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
  ) {
    super(numeroConta, saldoInicial, dataAbertura);
    this.taxaJuros = taxaJuros;
  }

  public depositar(valor: number): void {
    this.setSaldo(this.getSaldo() + valor);
    console.log(`Depósito realizado: R$${valor}. Saldo atual: R$${this.getSaldo}`);
}

public sacar(valor: number): void {
    if(valor > this.getSaldo()) {
      console.log("Saldo insuficiente");
      return;
} 
  this.setSaldo(this.getSaldo() - valor);
  console.log(`Saque realizado: R$${valor}. Saldo atual: R$${this.getSaldo}`); 
}

public transferir(destino: IConta, valor: number): void {
  if(valor > this.getSaldo()){
    console.log("Saldo insuficiente");
    return;
  }
  
}
}