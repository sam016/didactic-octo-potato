var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const uniqid = require('uniqid');

// create a schema
var orderitemSchema = new Schema({
  id: {
    type: String
  },
  menuitem: {
    type: Schema.ObjectId,
    ref: 'MenuItem',
    required: 'Menu item is missing'
  },
  quantity: {
    type: Number,
    required: 'Quantity of menu item is missing'
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


orderitemSchema.pre('save', function (done) {
  if (this.isNew) {
    this.id = uniqid();
  }

  done();
});

// the schema is useless so far
// we need to create a model using it
var OrderItem = mongoose.model('OrderItem', orderitemSchema);

OrderItem.PUBLIC_COLUMNS = "id menuitem quantity created_on -_id";

module.exports = OrderItem;
