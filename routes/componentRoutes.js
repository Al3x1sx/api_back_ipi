const express = require('express');
const router = express.Router();
const componentController = require('../controlleurs/componentController');

router.post('/', componentController.create);
router.get('/', componentController.getAll);
router.get('/:id', componentController.getById);
router.put('/:id', componentController.update);
router.put('/:id/partner', componentController.addPartner);
router.delete('/:id', componentController.remove);
router.delete('/:id/partner', componentController.removePartner);

module.exports = router;
