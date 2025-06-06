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

exports.addPartner = async(req, res) => {
    const { price, partnerId } = req.body;

    if (!partnerId || !price ) {
        return res.status(400).json({ message: 'Champs manquants.' });
    }

    try {
        const component = await componentService.getComponentById(req.params.id);
        if (!component) return res.status(404).json({ error: 'Not found' });

        const existingPrice = component.price.find(p => p.partnerId.toString() === partnerId);

        if (existingPrice) {
            existingPrice.price = price;
        } else {
            component.price.push({ price, partnerId });
        }

        await component.save();

        res.status(200).json({ message: existingPrice ? 'Prix mis à jour.' : 'Prix ajouté.', component });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur.' });
    }
};

exports.removePartner = async(req, res) => {
    const { partnerId } = req.body;

    if (!partnerId ) {
        return res.status(400).json({ message: 'Champs manquants.' });
    }

    try {
        const component = await componentService.getComponentById(req.params.id);
        if (!component) return res.status(404).json({ error: 'Not found' });

        const existingPrice = component.price.find(p => p.partnerId.id.toString() === partnerId);

        if (existingPrice) {
            component.price.remove(existingPrice)
        }

        await componentService.updateComponent(component.id, component);

        res.status(200).json({ message: existingPrice ? 'Partner supprimé' : 'Partner déjà supprimé.', component });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur.' });
    }
};