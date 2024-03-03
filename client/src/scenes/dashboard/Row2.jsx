import { useMemo } from "react";
import AnalyticsBox from "../../components/AnalyticsBox";
import { useGetKpisQuery } from "../../state/apiSlice";
import BoxHeader from "../../components/BoxHeader";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Row2 = () => {
    const { data } = useGetKpisQuery();
    console.log(data)
    const operationalAndNonOpreational = useMemo(() => {
      return (
        data &&
        data[0].monthlyData.map(
          ({ month, operationalExpenses, nonOperationalExpenses }) => {
            return {
              name: month.charAt(0).toUpperCase() + month.slice(1, 3),
              operationalExpenses: operationalExpenses,
              nonOperationalExpenses: nonOperationalExpenses,
            };
          }
        )
      );
    }, [data]);
  return (
    <>
      <AnalyticsBox gridArea={"d"}>
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText={"+4%"}
        />
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            width={500}
            height={400}
            data={operationalAndNonOpreational}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis yAxisId="left" style={{ fontSize: "10px" }} />
            <YAxis
              yAxisId="right"
              style={{ fontSize: "10px" }}
              orientation="right"
            />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="operationalExpenses"
              stroke="#8884d8"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="nonOperationalExpenses"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"e"}></AnalyticsBox>
      <AnalyticsBox gridArea={"f"}></AnalyticsBox>
    </>
  );
};

export default Row2;
