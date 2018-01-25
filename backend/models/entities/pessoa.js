import mongoose from "mongoose";

var Pessoas = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        max: 30
    },
    sobrenome: {
        type: String,
        required: true,
        max: 40
    },
    cpf: {
        type: String,
        min: 14,
        max: 14,
        required: true
    },
    telefone: {
        type: [],
        min: 8,
        max: 15
    },
    email: {
        type: [],
        required: true
    },
    endereco: {
        type: [],
        logradouro: {
            type: String,
            max: 50
        },
        numero: {
            type: Number,
            max: 15
        },
        bairro: {
            type: String,
            max: 40
        },
        complemento: {
            type: String,
            max: 40
        },
        cep: {
            type: String,
            max: 15
        },
        cidade: {
            type: String,
            max: 40
        },
        uf: {
            type: String,
            max: 2
        },
        pais: {
            type: String,
            max: 20
        }
    },
    nota: {
        type: Number,
        max: 2,
        required: true
    },
    lastChanges: {
        type: Date,
        default: Date.now
    },
    assinante: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Pessoas', Pessoas);