const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  img: String,
  uniNumber: String,
  countryURL: String,
});

const country = mongoose.model("country", countrySchema);

module.exports = country;
