import mongoose from 'mongoose';


const Endereco = mongoose.Schema({
    logradouro: {
        type: String,
        max: 50,
        required: true
    },
    numero: {
        type: Number,
        max: 15,
    },
    bairro: {
        type: String,
        max: 40,
        required: true
    },
    complemento: {
        type: String,
        max: 40,
        required: true
    },
    cep: {
        type: String,
        max: 15,
        required: true
    },
    cidade: {
        type: String,
        max: 40,
        required: true
    },
    uf: {
        type: String,
        max: 2,
        required: true
    },
    pais: {
        type: String,
        max: 20,
        required: true
    }
})
const Imoveis = mongoose.Schema({
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
    endereco: Endereco,
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