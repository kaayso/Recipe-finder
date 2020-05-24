const mongoose = require('mongoose');

const {
  Schema
} = mongoose;
const requiredString = {
  type: String,
  required: true
};

const schema = new Schema({
  username: requiredString,
  emailAddress: requiredString,
  password: requiredString,
}, {
  timestamps: true
});


const User = mongoose.model('User', schema);

module.exports = User;