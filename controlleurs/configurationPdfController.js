const PDFDocument = require('pdfkit');
const configService = require('../services/configurationService');

exports.downloadPdf = async (req, res) => {
    try {
        const config = await configService.getConfigurationById(req.params.id);

        if (!config) return res.status(404).json({ error: 'Configuration non trouvée' });

        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=config-${config._id}.pdf`);

        doc.pipe(res);

        // --- En-tête
        doc.fontSize(20).text(`Configuration PC : ${config.name}`, { underline: true });
        doc.moveDown();

        // --- Composants
        doc.fontSize(14).text('Composants inclus :');
        config.components.forEach(component => {
            doc.text(`- ${component.name} (${component.description || 'Aucune description'})`);
        });

        // --- Utilisateur si dispo
        if (config.userId) {
            doc.moveDown();
            doc.fontSize(12).text(`Créé par : ${config.userId.firstname} ${config.userId.lastname}`);
        }

        doc.end();

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};