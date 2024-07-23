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

// Criar Conta Corrente
const contaCorrente = new ContaCorrente(
  "JJ2015X",
  200,
  new Date(),
  400,
);

cliente.adicionarConta(contaCorrente);

console.log("Antes do depósito:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente.getSaldo()}`);

contaCorrente.depositar(500);

console.log("Após depósito:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente.getSaldo()}`);

console.log("Antes do saque:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente.getSaldo()}`);

contaCorrente.sacar(200);

console.log("Após saque:");
console.log(`Saldo Conta Corrente: R$ ${contaCorrente.getSaldo()}`);