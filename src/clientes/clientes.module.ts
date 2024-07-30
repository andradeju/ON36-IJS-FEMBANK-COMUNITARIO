import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { ContasService } from '../contas/contas.service';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, ContasService],
  exports: [ClientesService]
})
export class ClientesModule {}
