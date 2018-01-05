import mongoose from 'mongoose';

var Imoveis = mongoose.Schema({
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoas',
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    localizacao: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    },
    comentarios: {
        type: [],
        pessoa: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pessoas'
        },
        comentario: {
            type: String,
            max: 200
        },
        nota: {
            type: Number
        }
    },
    descricao: {
        type: String,
        required: true
    },
    caracteristicas: {
        type: [],
        nome: {
            type: String
        },
        valor: {
            type: String
        }
    }
});

export default mongoose.model("Imoveis", Imoveis);