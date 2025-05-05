const mongoose = require('mongoose');

const partnerSchema = mongoose.Schema({
    name: {type: String, required: true},
    url: {type: String, required: true, unique: true},
    commissionRate: {type: Number, required: true},
    conditions: {type: String, required: true}
});

module.exports = mongoose.model('Partner', partnerSchema);