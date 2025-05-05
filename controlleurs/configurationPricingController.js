const configService = require('../services/configurationService');

exports.getMinimumPrice = async (req, res) => {
    try {
        const config = await configService.getConfigurationById(req.params.id);

        if (!config) return res.status(404).json({ error: 'Configuration non trouvée' });

        let total = 0;

        for (const component of config.components) {
            if (component.price && component.price.length > 0) {
                const min = Math.min(...component.price.map(p => p.price));
                total += min;
            }
        }

        res.json({ configurationId: config._id, totalMinimumPrice: total });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
