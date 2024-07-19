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
exports.Cliente = void 0;
var Usuario_1 = require("./Usuario");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nomeCompleto, cpf, data_nascimento, endereco, telefone, email) {
        var _this = _super.call(this, nomeCompleto, cpf, data_nascimento, endereco, telefone, email) || this;
        _this.contas = [];
        _this.contas = [];
        return _this;
    }
    Cliente.prototype.adicionarConta = function (conta) {
        this.contas.push(conta);
    };
    return Cliente;
}(Usuario_1.Usuario));
exports.Cliente = Cliente;
