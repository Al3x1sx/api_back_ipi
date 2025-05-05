const Configurations = require('../models/configurations');

exports.createConfiguration = async (data) => {
    return await Configurations.create(data);
};

exports.getAllConfigurations = async () => {
    return await Configurations.find().populate('userId').populate('components');
};

exports.getConfigurationById = async (id) => {
    return await Configurations.findById(id).populate('userId').populate('components');
};

exports.updateConfiguration = async (id, data) => {
    return await Configurations.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteConfiguration = async (id) => {
    return await Configurations.findByIdAndDelete(id);
};