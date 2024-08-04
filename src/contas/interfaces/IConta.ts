export interface IConta {
  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(destino: IConta, valor: number): void;
}