const express = require('express');
const HttpStatus = require('http-status-codes');

const Order = require('../models/order');
const OrderItem = require('../models/orderitem');
const MenuItem = require('../models/menuitem');


const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  sendError(res, 'Endpoint not implemented', HttpStatus.NOT_IMPLEMENTED);
});

/* GET menu. */
router.get('/menu', (req, res) => {
  sendCollectionData(req, res, MenuItem);
});

/* GET all orders. */
router.get('/order-item', (req, res) => {
  sendCollectionData(req, res, OrderItem, {
    path: 'menuitem',
    select: MenuItem.PUBLIC_COLUMNS
  });
});

/* GET all orders. */
router.get('/order', (req, res) => {
  sendCollectionData(req, res, Order, {
    path: 'items',
    select: OrderItem.PUBLIC_COLUMNS,
    populate: {
      path: 'menuitem',
      select: MenuItem.PUBLIC_COLUMNS
    }
  });
});

/* GET one order. */
router.get('/order/:order_id', (req, res) => {
  sendCollectionItem(req, res, Order, {
    id: req.params.order_id
  }, {
    path: 'items',
    select: OrderItem.PUBLIC_COLUMNS,
    populate: {
      path: 'menuitem',
      select: MenuItem.PUBLIC_COLUMNS
    }
  });
});

/* POST order. */
router.post('/order', (req, res) => {
  sendError(res, 'Endpoint not implemented', HttpStatus.NOT_IMPLEMENTED);
});

/* GET api listing. */
router.post('/*', (req, res) => {
  sendError(res, 'Endpoint does not exist', HttpStatus.NOT_FOUND);
});



function sendCollectionItem(req, res, model, filter, population) {
  model
    .findOne(filter, model.PUBLIC_COLUMNS)
    .populate(population)
    .then((item) => {
      if (item)
        sendResult(req, res, item);
      else
        sendError(res, "Resource not found", HttpStatus.NOT_FOUND);
    })
    .catch((err) => {
      console.log(err);
      sendError(res, 'Error occured', HttpStatus.INTERNAL_SERVER_ERROR, {
        extra: err
      });
    })
}

function sendCollectionData(req, res, model, population) {
  model
    .find({}, model.PUBLIC_COLUMNS)
    .populate(population)
    .then((items) => {
      sendResult(req, res, items);
    })
    .catch((err) => {
      console.log(err);
      sendError(res, 'Error occured', HttpStatus.INTERNAL_SERVER_ERROR, {
        extra: err
      });
    })
}

function sendError(res, error, code = 500, extra = {}) {
  var data = extra || {};
  data.error = error;

  res
    .status(code)
    .json(data);
}

function sendResult(req, res, result, code = 200, extra = {}) {
  var data = extra || {};
  data.result = result;

  res
    .status(code || 200)
    .contentType('application/json')
    .send(JSON.stringify(data, null, 'formatted' in req.query ? 2 : 0));
}

module.exports = router;
