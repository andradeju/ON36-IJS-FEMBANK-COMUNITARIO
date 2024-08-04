import { Module } from '@nestjs/common';
import { ClientesService } from '../clientes/services/clientes.service';
import { ContasController } from './controllers/contas.controller';
import { ContasService } from './services/contas.service';
import { ContasFactory } from './factories/contas.factory';

@Module({
  controllers: [ContasController],
  providers: [ContasFactory, ContasService, ClientesService],
  exports: [ContasFactory, ContasService, ClientesService],
})
export class ContasModule {
}
