import mongoose from "mongoose";

var Pessoas = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        min: 11,
        max: 11,
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
            logradouro: {
                type: String
            },
            numero: {
                type: Number
            },
            bairro: {
                type: String
            },
            complemento: {
                type: String
            },
            cep: {
                type: String
            },
            cidade: {
                type: String
            },
            uf: {
                type: String
            },
            pais: {
                type: String
            }
        }]
    },
    nota: {
        type: Number,
        required: true
    },
    dataNasc: {
        type: Date,
        required: true
    },
    lastChanges: {
        type: Date,
        default: Date.now
    },
    assinante: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('Pessoas', Pessoas);