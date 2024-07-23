export abstract class Usuario {
  
  private nomeCompleto: string;
  private cpf: string;
  private data_nascimento: Date;
  private endereco: string;
  private telefone: string;
  private email: string;
  
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

  getNomeCompleto(): string {
    return this.nomeCompleto;
  }

  getCpf(): string {
    return this.cpf;
  }

  getDataNascimento(): Date {
    return this.data_nascimento;
  }

  getEndereco(): string {
    return this.endereco;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getEmail(): string {
    return this.email;
  }
}