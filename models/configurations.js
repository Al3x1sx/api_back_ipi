const mongoose = require('mongoose');

const configurationsSchema = mongoose.Schema({
    userId: {type: ObjectId, ref: 'User'},
    components: [{type: ObjectId, ref: 'Components', unique: true}]
});

module.exports = mongoose.model('Configurations', configurations);