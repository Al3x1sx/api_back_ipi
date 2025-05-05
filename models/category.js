const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {type: CategoryNameEnum, required: true, unique: true}
});

module.exports = mongoose.model('Category', categorySchema);