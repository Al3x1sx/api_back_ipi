const express = require('express');
const router = express.Router();
const partnerController = require('../controlleurs/partnerController');

router.post('/', partnerController.create);
router.get('/', partnerController.getAll);
router.get('/:id', partnerController.getById);
router.put('/:id', partnerController.update);
router.delete('/:id', partnerController.remove);

module.exports = router;