const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/categoria/:categoriaId', controller.getByCategory);

module.exports = router;
