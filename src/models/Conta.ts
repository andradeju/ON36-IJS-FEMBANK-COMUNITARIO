import { IConta } from "../interfaces/IConta";
import { Cliente } from "./Cliente";


export abstract class Conta implements IConta {
  protected numeroConta: string;
  protected saldo: number;
  protected dataAbertura: Date;
  protected cliente: Cliente;

  constructor(numeroConta: string, saldoInicial: number, dataAbertura: Date, cliente: Cliente) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.dataAbertura = dataAbertura;
    this.cliente = cliente;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public abstract depositar(valor: number): void;
  public abstract sacar(valor: number): void;
  public abstract transferir(destino: IConta, valor: number): void;
}