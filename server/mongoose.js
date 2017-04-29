const mongoose = require('mongoose');

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

module.exports = mongoose;
