import { ContaTipo } from "../enum/conta-type.enum";
import { Cliente } from "../../clientes/entities/cliente.entity";
import { IConta } from "../interfaces/IConta";
import { Gerente } from "../../gerentes/entities/gerente.model";
import { randomUUID, UUID } from "crypto";


export abstract class Conta implements IConta {
  id: string;
  numeroConta: string;
  saldo: number;
  tipo: ContaTipo;
  clienteId: Cliente['id'];
  gerenteId: Gerente['id'];

  constructor(
    numeroConta: string,
    saldo: number,
    tipo: ContaTipo,
    clienteId: number,
    gerenteId: number
  ){
    this.id = randomUUID();
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.clienteId = clienteId;
    this.gerenteId = gerenteId;
  }

  public abstract depositar(valor: number): void;
  public abstract sacar(valor: number): void;
  public abstract transferir(destino: IConta, valor: number): void;
}