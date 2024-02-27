import { useMemo } from "react";
import AnalyticsBox from "../../components/AnalyticsBox";
import { useGetKpisQuery } from "../../state/apiSlice";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Row1 = () => {
  const { data } = useGetKpisQuery();
//   console.log(`data:${data}`);
const revenueExpenses = useMemo(() => {
    return (
        data &&
        data[0].monthlyData.map(({month, revenue, expenses}) => {
            return {
                name: month.substring(0,3),
                revenue: revenue,
                expense: expenses,
            }
        })
    )
},[data])

  return (
    <>
      <AnalyticsBox gridArea={"a"}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"b"}></AnalyticsBox>
      <AnalyticsBox gridArea={"c"}></AnalyticsBox>
    </>
  );
};

export default Row1;
