import { Body, Controller, Delete, Param, ParseIntPipe, Get, Patch, Post } from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../entities/cliente.entity'; 


@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService){}
  
  @Post('')
    adicionarCliente(
      @Body('nomeCompleto') nomeCompleto: string, 
      @Body('cpf') cpf: string,
      @Body('data_nascimento') data_nascimento: Date,
      @Body('endereco') endereco: string,
      @Body('telefone') telefone: string,
      @Body('email') email: string
  ): Cliente {
      return this.clientesService.adicionarCliente(
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
  
  @Get(':id')
  buscarClienteId(
    @Param('id', ParseIntPipe) id: number): Cliente {
      return this.clientesService.buscarClienteId(id);
    }
  
}
