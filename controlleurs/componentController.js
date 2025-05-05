const componentService = require('../services/componentService');

exports.create = async (req, res) => {
    try {
        const component = await componentService.createComponent(req.body);
        res.status(201).json(component);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const components = await componentService.getAllComponents();
        res.json(components);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const component = await componentService.getComponentById(req.params.id);
        if (!component) return res.status(404).json({ error: 'Not found' });
        res.json(component);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const component = await componentService.updateComponent(req.params.id, req.body);
        if (!component) return res.status(404).json({ error: 'Not found' });
        res.json(component);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const component = await componentService.deleteComponent(req.params.id);
        if (!component) return res.status(404).json({ error: 'Not found' });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
