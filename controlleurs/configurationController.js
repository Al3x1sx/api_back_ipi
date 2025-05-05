const configService = require('../services/configurationService');

exports.create = async (req, res) => {
    try {
        const config = await configService.createConfiguration(req.body);
        res.status(201).json(config);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const configs = await configService.getAllConfigurations();
        res.json(configs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const config = await configService.getConfigurationById(req.params.id);
        if (!config) return res.status(404).json({ error: 'Not found' });
        res.json(config);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const config = await configService.updateConfiguration(req.params.id, req.body);
        if (!config) return res.status(404).json({ error: 'Not found' });
        res.json(config);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const config = await configService.deleteConfiguration(req.params.id);
        if (!config) return res.status(404).json({ error: 'Not found' });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};