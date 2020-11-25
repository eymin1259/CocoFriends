const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;
const districtSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: ObjectId,
    required: true,
    ref: "City",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("District", districtSchema);
