const Partner = require('../models/partner');

exports.createPartner = async (data) => {
    return await Partner.create(data);
};

exports.getAllPartners = async () => {
    return await Partner.find();
};

exports.getPartnerById = async (id) => {
    return await Partner.findById(id);
};

exports.updatePartner = async (id, data) => {
    return await Partner.findByIdAndUpdate(id, data, { new: true });
};

exports.deletePartner = async (id) => {
    return await Partner.findByIdAndDelete(id);
};