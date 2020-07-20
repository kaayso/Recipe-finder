const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const {
  Schema,
} = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const schema = new Schema({
  username: {
    ...requiredString,
  },
  email: {
    ...requiredString,
    unique: true,
  },
  password: requiredString,
  admin: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

schema.plugin(uniqueValidator);

const User = mongoose.model('User', schema);

module.exports = User;