import { Box, Grid, styled } from "@mui/material";
import { useGetKpisQuery } from "../../state/apiSlice";
import { useMemo, useState } from "react";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

const ChartBox = styled(Box)(({ theme }) => ({
  borderRadius: 5,
  boxShadow: theme.shadows[1],
  minHeight: "80vh",
  border: "1px solid black",
}));

function Prediction() {
  const { data : kpiData } = useGetKpisQuery(); 

  const formattedData = useMemo(()=> {
    if(!kpiData) return [];
    const  { monthlyData } = kpiData[0];
    const formatted = monthlyData.map(({ revenue }, i) => {
        return [i, revenue]
    })

    
  },[kpiData])

  return (
    <Box width={"100%"} height={"100%"}>
      <Grid container>
        <Grid item xs={12}>
          <ChartBox>
            <ResponsiveContainer width="100%" height="70%">
              <LineChart
                data={formattedData}
                margin={{
                  top: 30,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  style={{ fontSize: "10px" }}
                />
                <YAxis yAxisId="left" style={{ fontSize: "10px" }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8884d8"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="profit"
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartBox>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Prediction;
