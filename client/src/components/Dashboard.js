import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import TotalAttendanceChart from "./TotalAttendanceChart";
import GenderDistributionChart from "./GenderDistributionChart";
import StudentList from "./StudentList";
import TotalStudentsCard from "./TotalStudentsCard";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.secondary,
}));

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/student");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/add-student"
        sx={{ mb: 4 }}>
        Add New Student
      </Button>
      <Grid container spacing={3}>
        {/* Total Attendance Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Total Attendance</Typography>
            <TotalAttendanceChart students={students} />
          </Item>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <TotalStudentsCard totalStudents={students.length} />
          </Item>
        </Grid>
        {/* Gender Distribution Chart */}
        <Grid item xs={12} md={6} lg={4}>
          <Item>
            <Typography variant="h6">Gender Distribution</Typography>
            <GenderDistributionChart students={students} />
          </Item>
        </Grid>
        {/* Student List */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Student List
          </Typography>
          <StudentList students={students} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
