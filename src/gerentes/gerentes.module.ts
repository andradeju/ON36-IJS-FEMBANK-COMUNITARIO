import { Module } from '@nestjs/common';
import { ClientesService } from '../clientes/services/clientes.service';
import { GerentesController } from './controllers/gerentes.controller';
import { GerentesService } from './services/gerentes.service';

@Module({
  controllers: [GerentesController],
  providers: [GerentesService, ClientesService]
})
export class GerentesModule {}
