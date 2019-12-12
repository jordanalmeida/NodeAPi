const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ObrasSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true,
    },
    data_inicio: {
        type: Date,
        required: true,
    },
    data_fim: {
        type: Date,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ObrasSchema.plugin(mongoosePaginate)

mongoose.model('Obras', ObrasSchema);