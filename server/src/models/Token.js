const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const schema = new Schema({
  token: {
    type: String,
    required: true,
  },
});

const Token = mongoose.model('Token', schema);

module.exports = Token;