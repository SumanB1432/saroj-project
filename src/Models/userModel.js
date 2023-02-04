const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 4,
      max: 15,
    },

    profileImage: { type: String, required: true },
    
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    AdharNumber: {
      type: String,
      required: true,
      trim: true,
    },
    PanNumber: {
      type: String,
      required: true,
      trim: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    Age: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
