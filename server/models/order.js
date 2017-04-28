const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqid = require('uniqid');

// create a schema
var orderSchema = new Schema({
  id: {
    type: String
  },
  items: {
    type: [{
      type: Schema.ObjectId,
      ref: 'OrderItem'
    }],
    required: 'Order\'s items are empty'
  },
  cost: {
    type: Number
  },
  updated_on: {
    type: Date,
    default: Date.now
  },
  created_on: {
    type: Date,
    default: Date.now
  }
});

orderSchema.pre('save', function (done) {
  if (this.isNew) {
    this.id = uniqid();
  }

  this.cost = 0;
  this.items.forEach((item) => {
    this.cost += item.cost;
  });

  console.log("Order>cost", this.cost);

  done();
});

// the schema is useless so far
// we need to create a model using it
var Order = mongoose.model('Order', orderSchema);

Order.PUBLIC_COLUMNS = "id items cost created_on -_id";
Order.PROJECTION_ALIASES = {
  "ID": "$id",
  "Items": "$items",
  "Cost": "$cost",
  "Date": "$created_on",
  "_id": 0
};

module.exports = Order;
