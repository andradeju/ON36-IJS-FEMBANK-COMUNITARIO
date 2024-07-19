"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nomeCompleto, cpf, data_nascimento, endereco, telefone, email) {
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
