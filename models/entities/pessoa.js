import mongoose from "mongoose";

var Pessoa = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    telefone: {
        type: [],
    },
    email: {
        type: [],
        required: true
    },
    endereco: {
        type: [{
            logradouro: String,
            numero: number,
            bairro: String,
            complemento: String,
            cep: String,
            cidade: String,
            uf: String
        }]
    }
});

export default mongoose.Model('Pessoa', Pessoa);