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
}