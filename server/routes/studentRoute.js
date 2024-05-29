const express = require("express");
const {
  addNewStudent,
  getAllStudents,
  studentAnalytics,
} = require("../controllers/studentController");
const router = express.Router();

router.post("/student", addNewStudent);
router.get("/student", getAllStudents);
router.get("/students/analytic", studentAnalytics);

module.exports = router;
