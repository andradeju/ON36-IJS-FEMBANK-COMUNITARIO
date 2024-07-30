import { Module } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';
import { ContasService } from '../contas/contas.service';
import { GerentesController } from './gerentes.controller';
import { GerentesService } from './gerentes.service';

@Module({
  controllers: [GerentesController],
  providers: [GerentesService, ContasService, ClientesService]
})
export class GerentesModule {}
