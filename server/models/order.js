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

  done();
});

// the schema is useless so far
// we need to create a model using it
var Order = mongoose.model('Order', orderSchema);

Order.PUBLIC_COLUMNS = "id items added_on -_id";

module.exports = Order;
