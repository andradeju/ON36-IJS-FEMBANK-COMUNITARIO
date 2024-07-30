import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { Conta, ContaTipo } from './conta.model';
import { ClientesService } from '../clientes/clientes.service';
import * as path from 'path';
import * as fs from 'fs';


@Injectable()
export class ContasService {
  private readonly filePath = path.resolve('src/contas/contas.json')

  constructor(private readonly clientesService: ClientesService){}

  private lerConta(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[];
  }

  private escreverContas(contas: Conta[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(contas, null, 2), 'utf8');
  }

  abrirConta(
    numeroConta: string, 
    saldo: number, 
    tipo: ContaTipo, 
    clienteId: number,
    gerenteId: number): Conta {
    const contas = this.lerConta();

    const cliente = this.clientesService.buscarClienteId(clienteId);

    if(!cliente) {
      throw new Error(`Cliente com id ${clienteId} não encontrado`)
    }

    const novaConta = {
      id: contas.length > 0 ? contas[contas.length - 1].id + 1: 1,
      numeroConta,
      saldo,
      tipo,
      clienteId,
      gerenteId,
    }
    contas.push(novaConta);
    this.escreverContas(contas);
    return novaConta;
  }


  modificarTipoConta(
    @Param('id', ParseIntPipe) id: number,
    @Body('tipo') novoTipoConta: ContaTipo): Conta {
    const contas = this.lerConta();
    const conta = contas.find(conta => conta.id === id);

    if(!conta) {
      throw new Error(`Conta com id ${id} não encontrada`)
    }

    conta.tipo = novoTipoConta;
    
    this.escreverContas(contas);
    return conta;
  }

  
  fecharConta(id: number): void {
    const contas = this.lerConta();
    const contaIndex = contas.findIndex(conta => conta.id === id);
    contas.splice(contaIndex, 1)
    this.escreverContas(contas); 
  }
}