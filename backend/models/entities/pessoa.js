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
        min: 1,
        max: 2
    },
    email: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        min: 0,
        max: 10,
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