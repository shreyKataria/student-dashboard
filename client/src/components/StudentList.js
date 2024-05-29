import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const StudentTable = ({ students }) => {
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: 400, overflowY: "auto" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Contact No</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.contactNo}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>{student.attendance}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
