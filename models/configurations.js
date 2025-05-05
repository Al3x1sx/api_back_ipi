const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const configurationsSchema = Schema({
    userId: { type: Types.ObjectId, ref: 'User' },
    components: [{ type: Types.ObjectId, ref: 'Components' }]
});

module.exports = mongoose.model('Configurations', configurationsSchema);