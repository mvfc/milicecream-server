const express = require('express');
const routes = express.Router();


//Products
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//Sales
const SaleController = require('./controllers/SaleController');

routes.get('/sales', SaleController.index);
routes.get('/sales/:id', SaleController.show);
routes.post('/sales', SaleController.store);
routes.put('/sales/:id', SaleController.update);
routes.delete('/sales/:id', SaleController.destroy);


module.exports = routes;