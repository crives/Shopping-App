const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('helper/validate-request');
const productService = require('./product.service');

router.post('/add', addSchema, addProduct);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateSchema, updateProduct);
router.delete('/:id', _delete);

module.exports = router;

function addSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        stock: Joi.number().required(),
        picture: Joi.string()
    });
    validateRequest(req, next, schema);
}

function addProduct(req, res, next) {
    productService.create(req.body)
        .then(() => res.json({ message: 'Product added'}))
        .catch(next);
}

function getAll(req, res, next) {
    productService.getAll()
        .then(products => res.json(products))
        .catch(next);
}

function getById(req, res, next) {
    productService.getById(req.params.id)
        .then(product => res.json(product))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().empty(''),
        description: Joi.string().empty(''),
        price: Joi.number().empty(''),
        stock: Joi.number().empty(''),
        picture: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

function updateProduct(req, res, next) {
    productService.update(req.params.id, req.body)
        .then(product => res.json(product))
        .catch(next);
}

function _delete(req, res, next) {
    productService.delete(req.params.id)
        .then(() => res.json({ message: 'Product deleted successfully' }))
        .catch(next);
}
