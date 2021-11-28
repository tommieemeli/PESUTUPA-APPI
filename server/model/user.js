const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const Session = new Schema({
  refreshToken: {
    type: String,
    default: "",
  },
})

const User = new Schema({

  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  refreshToken: {
    type: [Session]
  },
  authStrategy: {
    type: String,
    default: "local"
  },
  points: {
    type: Number,
    default: 50,
  }
});

//Remove refreshToken from the response
User.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken
    return ret
  },
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", User);