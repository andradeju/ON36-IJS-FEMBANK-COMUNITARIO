import { Injectable } from '@nestjs/common';
import { Conta, ContaTipo } from './conta.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ContasService {
  private readonly filePath= path.resolve()

  private lerConta(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[];
  }

  private escreverContas(contas: Conta[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(contas, null, 2), 'utf8');

  }
  criarConta(numeroConta: string, saldo: number, tipo: ContaTipo, clienteId: number): Conta {
    const contas = this.lerConta();

    const novaConta = {
      id: contas.length > 0 ? contas[contas.length - 1].id + 1: 1,
      numeroConta,
      saldo,
      tipo,
      clienteId
    }
    contas.push(novaConta);
    this.escreverContas(contas);
    return novaConta;
  }
} 