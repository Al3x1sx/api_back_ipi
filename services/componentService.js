const Components = require('../models/components');

exports.createComponent = async (data) => {
    return await Components.create(data);
};

exports.getAllComponents = async () => {
    return await Components.find().populate('category').populate('price.partnerId');
};

exports.getComponentById = async (id) => {
    return await Components.findById(id).populate('category').populate('price.partnerId');
};

exports.updateComponent = async (id, data) => {
    return await Components.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteComponent = async (id) => {
    return await Components.findByIdAndDelete(id);
};
