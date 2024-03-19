import { Box, Button, styled } from "@mui/material";
import BoxHeader from "../../components/BoxHeader";
import { useGetKpisQuery } from "../../state/apiSlice";
import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import regression from "regression";

const ChartBox = styled(Box)(({ theme }) => ({
  borderRadius: 5,
  boxShadow: theme.shadows[1],
  width: "100%",
  height: "80vh",
  sx: {
    minHeight: "80vh",
  },
}));

function Prediction() {
  const [predictionOn, setPredictionOn] = useState(false);

  const { data } = useGetKpisQuery();
  const formattedData = useMemo(() => {
    if (!data) return [];
    const { monthlyData } = data[0];
    const formatted = monthlyData.map(({ revenue }, i) => {
      return [i, Number(revenue)];
    });

    const regressionLine = regression.linear(formatted);
    // console.log(regressionLine);

    return monthlyData.map(({ month, revenue }, i) => {
      return {
        name: month.charAt(0).toUpperCase() + month.slice(1, 3),
        "Current Revenue": Number(revenue),
        "Regression Line": regressionLine.points[i][1],
        "Predicted Revenue": regressionLine.predict(i + 12)[1],
      };
    });
  }, [data]);

  console.log(formattedData);
  return (
    <ChartBox>
        <BoxHeader />

        <Button onClick={() => {setPredictionOn(!predictionOn)}}>Click to Check the Prediction for Next Year</Button>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[13000, 26000]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Current Revenue"
            stroke="#8884d8"
            strokeWidth={0}
            dot={{ strokeWidth: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke="#82ca9d"
            strokeWith={5}
            dot={false}
          />
          {predictionOn ? (<Line
            type="monotone"
            dataKey="Predicted Revenue"
            stroke="gray"
            strokeDasharray="3 3"
          />) : (null)}
        </LineChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default Prediction;
