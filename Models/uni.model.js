const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  country: String,
  uni: {
    type: String,
  },
  uniURL: String,
  Degree: [
    {
      degree: String,
      MainFaculty: [
        {
          mainFaculty: String,
          SubFaculty: [
            {
              subfaculty: String,
              Major: [
                {
                  name: String,
                  URl: String,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const university = mongoose.model("university", universitySchema);

module.exports = university;
