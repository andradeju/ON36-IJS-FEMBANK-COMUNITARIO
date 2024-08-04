import { Body, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { Conta } from '../entities/conta.entity';
import { ContaTipo } from '../enum/conta-type.enum';
import { ContasFactory } from '../factories/contas.factory';
import { ClientesService } from '../../clientes/services/clientes.service';
import * as path from 'path';
import * as fs from 'fs';


@Injectable()
export class ContasService {
  private readonly filePath = path.resolve('src/contas/contas.json');
  private readonly contasFactory = new ContasFactory();

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
    gerenteId: number,
    limiteChequeEspecial?: number,
    taxaJuros?: number, 
    ): Conta {
    const contas = this.lerConta();

    const cliente = this.clientesService.buscarClienteId(clienteId);

    if(!cliente) {
      throw new Error(`Cliente com id ${clienteId} não encontrado`)
    }

    const novaConta = this.contasFactory.criarConta(
      numeroConta,
      saldo,
      tipo,
      clienteId,
      gerenteId,
      limiteChequeEspecial,
      taxaJuros,
    )
    contas.push(novaConta);
    this.escreverContas(contas);
    return novaConta;
  }


  modificarTipoConta(
    @Param('id', ParseIntPipe) id: string,
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

  fecharConta(id: string): void {
    const contas = this.lerConta();
    const contaIndex = contas.findIndex(conta => conta.id === id);
    contas.splice(contaIndex, 1)
    this.escreverContas(contas); 
  }
}