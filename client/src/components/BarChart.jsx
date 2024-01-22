import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import data from "../mockData.json";

function BarChart() {
  return (
    <>
      <Bar
        data={{
          labels: data.map((data) => data.month),
          datasets: [
            {
              label: "Revenue",
              data: data.map((data) => data.revenue),
              barThickness: 20,
              borderRadius: 5,
            },
            {
              label: "Expense",
              data: data.map((data) => data.expenses),
              barThickness: 20,
              borderRadius: 5,
            },
          ],
        }}
      />
    </>
  );
}

export default BarChart;
