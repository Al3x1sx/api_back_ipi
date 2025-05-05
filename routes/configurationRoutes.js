const express = require('express');
const router = express.Router();
const configController = require('../controlleurs/configurationController');

router.post('/', configController.create);
router.get('/', configController.getAll);
router.get('/:id', configController.getById);
router.put('/:id', configController.update);
router.delete('/:id', configController.remove);

module.exports = router;
