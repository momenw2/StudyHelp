const express = require("express");
const router = express.Router();
const Country = require("../Models/country.model");

router.get("/", async (req, res, next) => {
  try {
    const result = await Country.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// Add a new topic
router.post("/", async (req, res, next) => {
  try {
    const country = new Country(req.body);
    const result = await country.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
