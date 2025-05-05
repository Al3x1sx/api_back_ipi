const partnerService = require('../services/partnerService');

exports.create = async (req, res) => {
    try {
        const partner = await partnerService.createPartner(req.body);
        res.status(201).json(partner);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const partners = await partnerService.getAllPartners();
        res.json(partners);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const partner = await partnerService.getPartnerById(req.params.id);
        if (!partner) return res.status(404).json({ error: 'Not found' });
        res.json(partner);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const partner = await partnerService.updatePartner(req.params.id, req.body);
        if (!partner) return res.status(404).json({ error: 'Not found' });
        res.json(partner);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const partner = await partnerService.deletePartner(req.params.id);
        if (!partner) return res.status(404).json({ error: 'Not found' });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};