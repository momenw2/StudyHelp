const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countryUniversitiesSchema = new Schema({
  country: String,
  universities: [
    {
      name: String,
      img: String,
      QSRank: String,
      countryUniversityURL: String,
    },
  ],
});

const countryUniversity = mongoose.model(
  "countryUniversity",
  countryUniversitiesSchema
);

module.exports = countryUniversity;
