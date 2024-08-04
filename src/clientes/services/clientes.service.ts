import { Injectable, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Cliente } from '../entities/cliente.entity';


@Injectable()
export class ClientesService {
  private readonly filePath = path.resolve('src/clientes/clientes.json')

  private lerCliente(): Cliente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Cliente[];
  }

  private escreverClientes(clientes: Cliente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8');
  }

  adicionarCliente(
    nomeCompleto: string,
    cpf: string,
    data_nascimento: Date,
    endereco: string,
    telefone: string,
    email: string
  ): Cliente {
    const clientes = this.lerCliente();

    const geraId = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1;

    const novoCliente = new Cliente(
      geraId,
      nomeCompleto,
      cpf,
      data_nascimento,
      endereco,
      telefone,
      email,
    )
    clientes.push(novoCliente);
    this.escreverClientes(clientes);
    return novoCliente;
  }

  buscarClienteId(id: number): Cliente {
    const clientes = this.lerCliente();
    const cliente = clientes.find(cliente => cliente.id === id);
    if (!cliente) {
      throw new NotFoundException(`Cliente com id ${id} não encontrado`);  
  }
  return cliente;
}

  removerCliente(id: number): void {
    const clientes = this.lerCliente();
    const clienteIndex = clientes.findIndex(cliente => cliente.id === id);
    clientes.splice(clienteIndex, 1)
    this.escreverClientes(clientes); 
  }
}