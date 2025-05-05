const mongoose = require('mongoose');

const componentsPriceSchema = mongoose.Schema({
    price: {type: Number, required: true},
    partnerId: {type: ObjectId, ref: 'Partner', unique: true}
});

const componentsSchema = mongoose.Schema({
    name: {type: String, required: true},
    category: {type: ObjectId, ref: 'Category'},
    price: [componentsPriceSchema],
    description: {type: String, required: false}
});

module.exports = mongoose.model('Components', componentsSchema);