import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasController } from './contas/contas.controller';
import { ContasService } from './contas/contas.service';
import { ContasModule } from './contas/contas.module';

@Module({
  imports: [ContasModule],
  controllers: [AppController, ContasController],
  providers: [AppService, ContasService],
})
export class AppModule {}
