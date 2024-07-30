import { Conta } from "./Conta";
import { IConta } from "../interfaces/IConta";


export class ContaCorrente extends Conta {
  private limiteChequeEspecial: number;

  constructor(
    id: number,
    numeroConta: string, 
    saldoInicial: number,
    dataAbertura: Date,
    limiteChequeEspecial: number,
    ) {
      super(id, numeroConta, saldoInicial, dataAbertura)
      this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public depositar(valor: number): void {
        this.setSaldo(this.getSaldo() + valor);
        console.log(`Depósito realizado: R$${valor}. Saldo atual: R$${this.getSaldo()}`);
    }

    public sacar(valor: number): void {
        if(valor > this.getSaldo() + this.limiteChequeEspecial) {
          console.log("Saldo insuficiente");
          return;
    } 
    this.setSaldo(this.getSaldo() - valor);
    console.log(`Saque realizado: R$ ${valor}. Saldo atual: R$ ${this.getSaldo()}`);  
  }

  public transferir(destino: IConta, valor: number): void {
      
  }
}