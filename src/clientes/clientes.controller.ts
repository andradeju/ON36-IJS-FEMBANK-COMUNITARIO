import { Body, Controller, Post } from '@nestjs/common';
import { Conta, ContaTipo } from '../contas/conta.model';
import { ContasService } from '../contas/contas.service';


@Controller('clientes')
export class ClientesController {
  constructor(private readonly contasService: ContasService){}
  
  @Post()
  criarConta(
    @Body('numeroConta') numeroConta: string, 
    @Body('saldo') saldo: number,
    @Body('tipo') tipo: ContaTipo,
    @Body('clienteId') clienteId: number,
    ): Conta {
      return this.contasService.criarConta(
        numeroConta, saldo, tipo, clienteId)
    }

}
