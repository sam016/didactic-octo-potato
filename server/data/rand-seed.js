"use strict";

const mongoose = require('mongoose');
const chalk = require('chalk');
const promise = require('promise');
const randomInt = require('random-int');

// loading the necessary environment variables
require('dotenv').config();

//  Connecting mongo DB
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = promise;

//  Loading models
const MenuItem = require('../models/menuitem');
const OrderItem = require('../models/orderitem');
const Order = require('../models/order');

const MAX_ORDER_ITEMS = 100;
const MAX_QUANTITY_OF_ORDER_ITEM = 5;
const MAX_ORDER_ITEMS_PER_ORDER = 20;

/**
 * Attaching a new function SEED on the base mongoose Model 
 * which basically just wraps the create function,
 * but actually returns a promise object
 */
mongoose.Model.seed = function (entities) {
  var self = this;
  return new Promise((resolve, reject) => {
    self.create(entities, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  })
};


console.log(chalk.blue('Removing orders...'));

// Reset collections
Order
  .remove().exec()
  .then(() => {
    console.log(chalk.blue('Removing order items...'));
    return OrderItem.remove().exec()
  })
  .then(() => {
    console.log(chalk.blue('Removing menu items...'));
    return MenuItem.remove().exec()
  })

  // Seed
  .then(() => {
    console.log(chalk.blue('Seeding menu items...'));
    return MenuItem.seed(require('./menu-items.json'));
  })
  .then((menuItems) => {
    console.log(chalk.blue('Seeding order items...'));
    var orderItems = []; //require('./order-items.json');

    console.log(chalk.blue('\tPicking', MAX_ORDER_ITEMS, 'random menu items....'));
    var randomMenuItems = randomPick(menuItems, MAX_ORDER_ITEMS);


    console.log(chalk.blue('\tPreparing order items....'));
    for (var i = 0; i < MAX_ORDER_ITEMS; i++) {
      var menuItem = randomMenuItems[i];
      var orderItem = {};
      orderItem.menuitem = randomMenuItems[i];
      orderItem.quantity = randomInt(1, MAX_QUANTITY_OF_ORDER_ITEM);
      orderItems.push(orderItem);
    }

    return OrderItem.seed(orderItems);
  })
  .then((orderItems) => {
    console.log(chalk.blue('Seeding orders...'));

    var counterOrderItemsTaken = 0;
    var orders = [];


    console.log(chalk.blue('\tPreparing orders....'));
    while (counterOrderItemsTaken < orderItems.length) {
      var countOrderItemsToTake = Math.min(randomInt(1, MAX_ORDER_ITEMS_PER_ORDER), MAX_ORDER_ITEMS - counterOrderItemsTaken);
      orders.push({
        items: orderItems.slice(counterOrderItemsTaken, counterOrderItemsTaken + countOrderItemsToTake)
      });

      counterOrderItemsTaken += countOrderItemsToTake;
    }

    return Order.seed(orders);
  })

  // Finito!
  .then(() => {
    console.log(chalk.green('Successfully seeding completed.'));
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(chalk.red('Error occured while seeding!!!'));
    console.log(chalk.red(err));
    mongoose.connection.close();
  });


/**
 * 
 * @param {Array<T>} items Array of any
 * @param {Number} count Number of items to pick
 * @return {Array<T>}
 */
function randomPick(items, count) {
  var result = new Array(count),
    len = items.length,
    taken = new Array(len);
  if (count > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (count--) {
    var x = Math.floor(Math.random() * len);
    result[count] = items[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
}
