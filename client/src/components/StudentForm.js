import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const courseOptions = ["Math", "Science", "History", "Literature", "Art"];

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    gender: "",
    age: "",
    address: "",
    course: "",
    attendance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Student data submitted successfully");
        setFormData({
          name: "",
          contactNo: "",
          gender: "",
          age: "",
          address: "",
          course: "",
          attendance: "",
        });
      } else {
        const error = await response.json();
        alert(`Failed to submit student data: ${error.error}`);
      }
    } catch (error) {
      alert(`Failed to submit student data: ${error.message}`);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact No"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              fullWidth>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              fullWidth>
              {courseOptions.map((course, index) => (
                <MenuItem key={index} value={course}>
                  {course}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Attendance"
              name="attendance"
              type="number"
              value={formData.attendance}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default StudentForm;
