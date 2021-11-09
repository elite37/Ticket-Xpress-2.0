import { Bar, Doughnut } from "react-chartjs-2";
import React from "react";
import "./Charts.css";

const data = {
  labels: ["Flights", "Bus", "Trains"],
  datasets: [
    {
      label: "Booking Statistics",
      data: [12, 19, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Charts() {
  return (
    <div className='charts'>
      <div className='chartOne'>
        <Bar data={data} width={400} height={150} />
      </div>
      <div className='chartTwo'>
        <Doughnut data={data} height={50} width={250} />
      </div>
    </div>
  );
}

export default Charts;
