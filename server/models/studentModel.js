const mongoose = require("mongoose");

const courseOptions = ["Math", "Science", "History", "Literature", "Art"];

const Student = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  contactNo: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid contact number! It should be 10 digits.`,
    },
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Gender is required"],
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    minlength: [10, "Address must be at least 10 characters long"],
    maxlength: [300, "Address must be less than 300 characters long"],
  },
  course: {
    type: String,
    enum: courseOptions,
    required: [true, "Course is required"],
  },
  attendance: {
    type: Number,
    min: [0, "Attendance must be at least 0"],
    max: [100, "Attendance must be less than or equal to 100"],
    required: [true, "Attendance is required"],
  },
});

module.exports = mongoose.model("Student", Student);
