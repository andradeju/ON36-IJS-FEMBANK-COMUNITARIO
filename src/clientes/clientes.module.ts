import { Module } from '@nestjs/common';
import { ClientesController } from './controllers/clientes.controller';
import { ClientesService } from './services/clientes.service';
import { ContasService } from '../contas/services/contas.service';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, ContasService],
  exports: [ClientesService]
})
export class ClientesModule {}
