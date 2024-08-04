import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Gerente } from '../entities/gerente.model';

@Injectable()
export class GerentesService {
  private readonly filePath = path.resolve('src/gerentes/gerentes.json');

  private lerGerente(): Gerente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Gerente[];
  }

  private escreverGerentes(gerentes: Gerente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null,2), 'utf8');
  }

  criarGerente(
    nomeCompleto: string,
    cpf: string,
    data_nascimento: Date,
    endereco: string,
    telefone: string,
    email: string
  ): Gerente {
    const gerentes = this.lerGerente();

    const geraId = gerentes.length > 0 ? gerentes[gerentes.length - 1].id + 1 : 1;
    
    const novoGerente = new Gerente(
      geraId,
      nomeCompleto,
      cpf,
      data_nascimento,
      endereco,
      telefone,
      email,
    )
    gerentes.push(novoGerente);
    this.escreverGerentes(gerentes);
    return novoGerente;
  }
}
