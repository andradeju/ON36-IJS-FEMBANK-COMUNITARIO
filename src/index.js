"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./models/Cliente");
var ContaCorrente_1 = require("./models/ContaCorrente");
// Criar Cliente
var cliente = new Cliente_1.Cliente("Juca Westie", "999.888.777-11", new Date(2015, 10, 19), "Rua Bolinha, 5", "21 12345689", "westie.juca@dogmail.com");
// Criar Conta
var contaCorrente = new ContaCorrente_1.ContaCorrente("JJ2015X", 2000, new Date(), 500, cliente);
cliente.adicionarConta(contaCorrente);
console.log("Antes do depósito:");
console.log("Saldo Conta Corrente: R$ ".concat(contaCorrente['saldo']));
contaCorrente.depositar(500);
console.log("Após depósito:");
console.log("Saldo Conta Corrente: R$ ".concat(contaCorrente['saldo']));
console.log("Antes do saque:");
console.log("Saldo Conta Corrente: R$ ".concat(contaCorrente['saldo']));
contaCorrente.sacar(200);
console.log("Após saque:");
console.log("Saldo Conta Corrente: R$ ".concat(contaCorrente['saldo']));
