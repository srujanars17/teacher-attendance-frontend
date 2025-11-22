import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TrendChart({ data }) {
  const teacherCount = {};

  data.forEach((item) => {
    if (!teacherCount[item.teacher]) teacherCount[item.teacher] = 0;
    if (item.status === "Present") teacherCount[item.teacher] += 1;
  });

  return (
    <div className="chart-container">
      <h2 className="chart-title">Attendance Trend (Present Count)</h2>

      <Bar
        data={{
          labels: Object.keys(teacherCount),
          datasets: [
            {
              label: "Days Present",
              data: Object.values(teacherCount),
              backgroundColor: "rgba(56, 189, 248, 0.8)", // Cyan-ish Grafana style
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: { legend: { display: false } },
        }}
      />
    </div>
  );
}
