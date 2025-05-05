const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const componentsPriceSchema = Schema({
    price: { type: Number, required: true },
    partnerId: { type: Types.ObjectId, ref: 'Partner' }
});

const componentsSchema = Schema({
    name: { type: String, required: true },
    category: { type: Types.ObjectId, ref: 'Category' },
    price: [componentsPriceSchema],
    description: { type: String }
});

module.exports = mongoose.model('Components', componentsSchema);
