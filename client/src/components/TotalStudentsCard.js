import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TotalStudentsCard = ({ totalStudents }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Total Number of Students</Typography>
        <Typography variant="h4">{totalStudents}</Typography>
      </CardContent>
    </Card>
  );
};

export default TotalStudentsCard;
