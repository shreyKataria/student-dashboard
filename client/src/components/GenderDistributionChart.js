import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderDistributionChart = ({ students }) => {
  const maleCount = students.filter(
    (student) => student.gender === "male"
  ).length;
  const femaleCount = students.filter(
    (student) => student.gender === "female"
  ).length;

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [maleCount, femaleCount],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default GenderDistributionChart;
