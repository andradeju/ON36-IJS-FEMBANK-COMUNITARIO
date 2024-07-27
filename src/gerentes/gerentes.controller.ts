import { Body, Controller, Delete, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/cliente.model';
import { Conta, ContaTipo } from '../contas/conta.model';
import { ContasService } from '../contas/contas.service';

@Controller('gerentes')
export class GerentesController {
  constructor(private readonly contasService: ContasService,
    private readonly clientesService: ClientesService){}

  //Contas  
  @Post('abrir/contas')
  abrirConta(
    @Body('numeroConta') numeroConta: string, 
    @Body('saldo') saldo: number,
    @Body('tipo') tipo: ContaTipo,
    @Body('clienteId') clienteId: number,
    @Body('gerenteId') gerenteId: number,
  ): Conta {
    return this.contasService.abrirConta(numeroConta, saldo, tipo, clienteId, gerenteId)
  }

  @Patch(':id/modificar-conta')
  modificarTipoConta(
    @Param('id', ParseIntPipe) id: number, 
    @Body('tipo') novoTipoConta: ContaTipo): Conta {
    return this.contasService.modificarTipoConta(id, novoTipoConta);
  }


  @Delete(':id')
  fecharConta(@Param('id', ParseIntPipe) id: number): void {
    return this.contasService.fecharConta(id);
  }

  // Clientes
  @Post('adicionar/clientes')
  adicionarCliente(
    @Body('id', ParseIntPipe) id: number,
    @Body('nomeCompleto') nomeCompleto: string, 
    @Body('cpf') cpf: string,
    @Body('data_nascimento') data_nascimento: Date,
    @Body('endereco') endereco: string,
    @Body('telefone') telefone: string,
    @Body('email') email: string
  ): Cliente {
    return this.clientesService.adicionarCliente(
      id, 
      nomeCompleto, 
      cpf, 
      data_nascimento, 
      endereco, 
      telefone, 
      email)
  }

  @Delete(':id/remover-cliente')
  removerCliente(@Param('id', ParseIntPipe) id: number): void {
    return this.clientesService.removerCliente(id);
  }
}
