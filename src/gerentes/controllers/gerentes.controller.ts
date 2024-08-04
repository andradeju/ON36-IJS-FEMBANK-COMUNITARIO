import { Body, Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ClientesService } from '../../clientes/services/clientes.service';


@Controller('gerentes')
export class GerentesController {
  constructor (private readonly clientesService: ClientesService){}
}
