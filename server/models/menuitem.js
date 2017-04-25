const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqid = require('uniqid');

// create a schema
var menuitemSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: 'Menu item\'s name is missing'
  },
  description: {
    type: String,
    required: 'Menu item\'s description is missing'
  },
  price: {
    type: Number,
    required: 'Menu item\'s price is missing'
  },
  type: {
    type: String,
    required: 'Menu item\'s type is missing'
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


menuitemSchema.pre('save', function (done) {
  if (this.isNew) {
    this.id = uniqid();
  }

  done();
});

// the schema is useless so far
// we need to create a model using it
var MenuItem = mongoose.model('MenuItem', menuitemSchema);

MenuItem.PUBLIC_COLUMNS = "id title description price type created_on -_id";

module.exports = MenuItem;
