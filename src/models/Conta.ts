import { IConta } from "../interfaces/IConta";

export abstract class Conta implements IConta {
  private numeroConta: string;
  private saldo: number;
  private dataAbertura: Date;

  constructor(numeroConta: string, saldoInicial: number, dataAbertura: Date) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.dataAbertura = dataAbertura;
  }

  public getNumeroConta(): string {
    return this.numeroConta;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public getDataAbertura(): Date {
    return this.dataAbertura;
  }

  public setSaldo(valor: number) {
    return this.saldo = valor;
  }

  public abstract depositar(valor: number): void;
  public abstract sacar(valor: number): void;
  public abstract transferir(destino: IConta, valor: number): void;
}