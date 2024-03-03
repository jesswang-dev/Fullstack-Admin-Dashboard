import { useMemo } from "react";
import AnalyticsBox from "../../components/AnalyticsBox";
import BoxHeader from "../../components/BoxHeader";
import { useGetKpisQuery } from "../../state/apiSlice";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Row1 = () => {
  const { data } = useGetKpisQuery();
    //console.log(data);
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.charAt(0).toUpperCase() + month.slice(1, 3),
          revenue: revenue,
          expense: expenses,
        };
      })
    );
  }, [data]);

  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.charAt(0).toUpperCase() + month.slice(1, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  const revenueByMonth = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.charAt(0).toUpperCase() + month.slice(1, 3),
          revenue: revenue
        };
      })
    );
  }, [data]);

  return (
    <>
      <AnalyticsBox gridArea={"a"}>
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="The area graph represents revenue and expenses each month of 2023"
          sideText={"+4%"}
        />
        <ResponsiveContainer width="100%" height="80%">
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
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
              domain={[8000, 23000]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              dot={true}
              fillOpacity={1}
              fill="url(#color)"
            />
            <Area
              type="monotone"
              dataKey="expense"
              stroke="#8884d8"
              dot={true}
              fillOpacity={1}
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </AnalyticsBox>

      <AnalyticsBox gridArea={"b"}>
        <BoxHeader
          title="Profit and Revenue"
          subtitle="The line graph represents profit and revenue each month of 2023"
          sideText={"+4%"}
        />
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
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
      </AnalyticsBox>

      <AnalyticsBox gridArea={"c"}>
        <BoxHeader
          title="Monthly Revenue"
          subtitle="The bar graph represents revenue earned each month of 2023"
          sideText={"+4%"}
        />
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={500}
            height={400}
            data={revenueByMonth}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              domain={[12000, 23000]}
            />
            <Tooltip />
            <Bar
              type="monotone"
              dataKey="revenue"
              fill="url(#color)"
            />
          </BarChart>
        </ResponsiveContainer>
      </AnalyticsBox>
    </>
  );
};

export default Row1;
