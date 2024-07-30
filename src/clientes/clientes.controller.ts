import { Body, Controller, Delete, Param, ParseIntPipe, Get, Patch, Post } from '@nestjs/common';
import { Conta, ContaTipo } from '../contas/conta.model';
import { ContasService } from '../contas/contas.service';


@Controller('clientes')
export class ClientesController {
  constructor(private readonly contasService: ContasService){}
  
  @Post('contas')
  abrirConta(
    @Body('numeroConta') numeroConta: string, 
    @Body('saldo') saldo: number,
    @Body('tipo') tipo: ContaTipo,
    @Body('clienteId') clienteId: number,
    @Body('gerenteId') gerenteId: number,
    ): Conta {
      return this.contasService.abrirConta(
        numeroConta, saldo, tipo, clienteId, gerenteId)
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
}
