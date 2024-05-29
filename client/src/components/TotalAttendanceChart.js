import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalAttendanceChart = ({ students }) => {
  // const totalStudentSchool = students.length;
  const totalAttendance = students.reduce(
    (acc, student) => acc + student.attendance,
    0
  );
  const totalPossibleAttendance = (students.attendance * students.length) / 100;

  const data = {
    labels: ["Attendance", "Remaining"],
    datasets: [
      {
        data: [totalAttendance, totalPossibleAttendance - totalAttendance],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default TotalAttendanceChart;
