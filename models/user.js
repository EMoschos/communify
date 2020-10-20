const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last name is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  address: {
    type: String,
  },

  skills: {
    type: Array,
    default: ["{Add Skills Here}"],
  },

  experience: {
    type: Array,
    default: ["{Add Experience Here}"],
  },

  statusPoints: {
    type: Number,
    default: 0,
  },

  statusLevel: {
    type: String,
    default: "Scout",
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

UserSchema.methods = {
  validPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
