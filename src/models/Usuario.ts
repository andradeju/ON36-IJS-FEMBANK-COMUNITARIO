

export abstract class Usuario {
  
  protected nomeCompleto: string;
  protected cpf: string;
  protected data_nascimento: Date;
  protected endereco: string;
  protected telefone: string;
  protected email: string;
  
  constructor(
    nomeCompleto: string, 
    cpf: string, 
    data_nascimento: Date, 
    endereco: string,
    telefone: string,
    email: string

  ){
    this.nomeCompleto = nomeCompleto;
    this.cpf = cpf;
    this.data_nascimento = data_nascimento;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
  }
}