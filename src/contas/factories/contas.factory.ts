import { ContaTipo } from "../enum/conta-type.enum";
import { Conta } from "../entities/conta.entity";
import { ContaCorrente } from "../entities/conta-corrente.entity";
import { ContaPoupanca } from "../entities/conta-poupanca.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ContasFactory {
  criarConta(
    numeroConta: string,
    saldo: number,
    tipo: ContaTipo,
    clienteId: number,
    gerenteId: number,
    limiteChequeEspecial?: number,
    taxaJuros?: number,
  ) : Conta {
    switch(tipo){
      case ContaTipo.CORRENTE:
        if(limiteChequeEspecial === undefined){
          throw new Error("Limite de Cheque Especial é obrigatório para Conta Corrente");
        }
        return new ContaCorrente(
          numeroConta, saldo, tipo, clienteId, gerenteId, limiteChequeEspecial)
      case ContaTipo.POUPANCA:
        if(taxaJuros === undefined){
          throw new Error("Taxa de Juros é obrigatório para Conta Poupança");
        }
        return new ContaPoupanca(
          numeroConta, saldo, tipo, clienteId, gerenteId, taxaJuros); 
      default:
        throw new Error('Tipo de conta desconhecido');     
    }
  }
}