const mongoose = require("mongoose");
const url = "mongodb+srv://taikuritommi:rosenlew6969@cluster0.zeasc.mongodb.net/pesutupa?retryWrites=true&w=majority"
const connect = mongoose.connect(url)

connect.then((db) => {
    console.log("Connected to db !")
  })
  .catch(err => {
    console.log(err)
  })