import { Module } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';

@Module({
  controllers: [ContasController],
  providers: [ContasService, ClientesService],
})
export class ContasModule {
}
