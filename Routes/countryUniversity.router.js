const express = require("express");
const router = express.Router();
const CountryUniversity = require("../Models/countryUniversity.model");

router.get("/", async (req, res, next) => {
  try {
    const result = await CountryUniversity.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// Add a new topic
router.post("/", async (req, res, next) => {
  try {
    const countryUniversity = new CountryUniversity(req.body);
    const result = await countryUniversity.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
