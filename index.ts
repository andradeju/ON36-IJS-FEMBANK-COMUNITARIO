import { Cliente } from "./src/models/Cliente";
import { ContaCorrente } from "./src/models/ContaCorrente";


// Criar Cliente

const cliente = new Cliente(
  "Juca Westie",
  "999.888.777-11",
  new Date(2015, 10, 19),
  "Rua Bolinha, 5",
  "21 12345689",
  "westie.juca@dogmail.com",
);

// Criar Conta
const contaCorrente = new ContaCorrente(
  "JJ2015X",
  100,
  new Date(),
  500,
  cliente
);

cliente.adicionarConta(contaCorrente);

console.log("Antes do depósito:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente['saldo']}`);

contaCorrente.depositar(500);

console.log("Após depósito:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente['saldo']}`);

console.log("Antes do saque:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente['saldo']}`);

contaCorrente.sacar(200);

console.log("Após saque:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente['saldo']}`);