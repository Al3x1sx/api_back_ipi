const express = require('express');
const router = express.Router();
const configController = require('../controlleurs/configurationController');
const pdfController = require('../controlleurs/configurationPdfController');
const pricingController = require('../controlleurs/configurationPricingController');

router.post('/', configController.create);
router.get('/', configController.getAll);
router.get('/:id', configController.getById);
router.get('/:id/pdf', pdfController.downloadPdf);
router.get('/:id/price', pricingController.getMinimumPrice);
router.put('/:id', configController.update);
router.delete('/:id', configController.remove);

module.exports = router;
