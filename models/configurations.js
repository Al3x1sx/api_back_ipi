const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const configurationsSchema = Schema({
    name: { type: String },
    userId: { type: Types.ObjectId, ref: 'UserAuth' },
    components: [{ type: Types.ObjectId, ref: 'Components' }]
});

module.exports = mongoose.model('Configurations', configurationsSchema);