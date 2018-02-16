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
    endereco: {
        type: {},
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