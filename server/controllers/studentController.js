const Student = require("../models/studentModel");
const mongoose = require("mongoose");

const addNewStudent = async (req, res) => {
  const { name, contactNo, gender, address, age, course, attendance } =
    req.body;

  try {
    const newStudent = new Student({
      name,
      contactNo,
      gender,
      address,
      age,
      course,
      attendance,
    });
    await newStudent.save();
    res.status(201).json({ message: "success", newStudent });
  } catch (error) {
    res
      .status(400)
      .json({ message: "error adding student", error: error.message });
    console.log("error adding student", error.message);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch students" });
  }
};

const studentAnalytics = async (req, res) => {
  try {
    const students = await Student.find({});
    const attendance = students.map((student) => student.attendance);
    const location = students.map((student) => student.address);
    const gender = students.map((student) => student.gender);
    res.status(200).json([{ attendance, location, gender }]);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("error", error.message);
  }
};
module.exports = {
  addNewStudent,
  getAllStudents,
  studentAnalytics,
};
