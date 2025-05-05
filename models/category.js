const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {type: String, enum: ['CPU', 'GPU', 'RAM', 'SSD', "Alimentation", "Refroidissement", "Boîtier", "Disque dur", "Clavier", 'Souris', 'Ecran'], required: true, unique: true}
});

module.exports = mongoose.model('Category', categorySchema);