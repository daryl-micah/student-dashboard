const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
      unique: true,
    },
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    admissionDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("studentModel", studentSchema);
