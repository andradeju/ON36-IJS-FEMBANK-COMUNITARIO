"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
var Conta_1 = require("./Conta");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numeroConta, saldoInicial, dataAbertura, taxaJuros, cliente) {
        var _this = _super.call(this, numeroConta, saldoInicial, dataAbertura, cliente) || this;
        _this.taxaJuros = taxaJuros;
        return _this;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito realizado: R$".concat(valor, ". Saldo atual: R$").concat(this.saldo));
    };
    ContaPoupanca.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
            return;
        }
        this.saldo -= valor;
        console.log("Saque realizado: R$".concat(valor, ". Saldo atual: R$").concat(this.saldo));
    };
    ContaPoupanca.prototype.transferir = function (destino, valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
            return;
        }
    };
    return ContaPoupanca;
}(Conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
