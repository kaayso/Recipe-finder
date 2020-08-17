const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

const qtty = new Schema({
  unity: requiredString,
  value: requiredNumber,
});

const ingredient = new Schema({
  name: requiredString,
  quantity: {
    type: qtty,
    required: true,
  },
});

const schema = new Schema({
  uid: {
    type: String,
  },
  name: requiredString,
  image: {
    type: String,
  },
  persons: requiredNumber,
  ingredients: {
    type: [ingredient],
    required: true,
  },
  category: requiredString,
  time: {
    type: qtty,
    required: true,
  },
  description: {
    type: String,
  },
  default: {
    type: Boolean,
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', schema);

module.exports = Recipe;
