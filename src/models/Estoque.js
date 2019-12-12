const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EstoqueSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true,
    },
    produto_id: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

EstoqueSchema.plugin(mongoosePaginate)

mongoose.model('Estoque', EstoqueSchema);