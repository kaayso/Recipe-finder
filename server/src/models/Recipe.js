const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

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
    default: 'https://firebasestorage.googleapis.com/v0/b/recipe-finder-a7ec2.appspot.com/o/images%2Fdefault%2Fdefault_recipe.jpg?alt=media&token=9436b50e-32ff-40c7-a14f-bf8ee70d0ac6',
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