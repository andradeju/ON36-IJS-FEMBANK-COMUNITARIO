"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numeroConta, saldoInicial, dataAbertura, cliente) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.dataAbertura = dataAbertura;
        this.cliente = cliente;
    }
    return Conta;
}());
exports.Conta = Conta;
