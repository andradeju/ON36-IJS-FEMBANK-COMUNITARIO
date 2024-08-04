export class Usuario {

  constructor(
  public  id: number,
  public  nomeCompleto: string, 
  public  cpf: string, 
  public  data_nascimento: Date, 
  public  endereco: string,
  public  telefone: string,
  public  email: string

  ){}
}