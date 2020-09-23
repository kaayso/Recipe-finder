const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const schema = new Schema({
  name: requiredString,
  category: requiredString,
  part: {
    type: String,
  }
});

const Ingredient = mongoose.model('Ingredient', schema);

module.exports = Ingredient;