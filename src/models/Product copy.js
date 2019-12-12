const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    obras: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Obras',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema);