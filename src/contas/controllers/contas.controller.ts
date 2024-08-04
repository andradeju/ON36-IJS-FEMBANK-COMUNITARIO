import { Body, Controller, Delete, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { Conta } from '../entities/conta.entity';
import { ContaTipo } from '../enum/conta-type.enum';
import { ContasService } from '../services/contas.service';

@Controller('contas')
export class ContasController {
  constructor (private readonly contasService: ContasService){}

  //Contas  
  @Post('')
  abrirConta(
    @Body('numeroConta') numeroConta: string, 
    @Body('saldo') saldo: number,
    @Body('tipo') tipo: ContaTipo,
    @Body('clienteId') clienteId: number,
    @Body('gerenteId') gerenteId: number,
    @Body('limiteChequeEspecial') limiteChequeEspecial?: number,
    @Body('taxaJuros') taxaJuros?: number,


  ): Conta {
    return this.contasService.abrirConta(numeroConta, saldo, tipo, clienteId, gerenteId, limiteChequeEspecial, taxaJuros)
  }

  @Patch(':id/modificar-conta')
  modificarTipoConta(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body('tipo') novoTipoConta: ContaTipo): Conta {
    return this.contasService.modificarTipoConta(id, novoTipoConta);
  }

  @Delete(':id')
  fecharConta(@Param('id', ParseUUIDPipe) id: string): void {
    return this.contasService.fecharConta(id);
  }
}