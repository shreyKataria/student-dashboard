const express = require("express");
const {
  addNewStudent,
  getAllStudents,
} = require("../controllers/studentController");
const router = express.Router();

router.post("/student", addNewStudent);
router.get("/student", getAllStudents);

module.exports = router;
