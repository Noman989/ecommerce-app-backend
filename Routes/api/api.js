const express = require('express');
const categories = require('./categories');
const products = require('./products');
const product = require('./product');

const Router = express.Router();

Router.use('/categories',categories);
Router.use('/products', products);
Router.use('/product', product);

module.exports = Router;