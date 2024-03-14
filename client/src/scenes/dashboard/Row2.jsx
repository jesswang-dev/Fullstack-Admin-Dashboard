import { useMemo } from "react";
import AnalyticsBox from "../../components/AnalyticsBox";
import { useGetKpisQuery, useGetProductsQuery } from "../../state/apiSlice";
import BoxHeader from "../../components/BoxHeader";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  Dot
} from "recharts";
import FlexBetween from "../../components/FlexBetween";
import { Box, Typography } from "@mui/material";

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 600 },
];

/**customized dot for scatter plot */
const scatterDot  = ({ cx, cy }) => {
  return <Dot cx={cx} cy={cy} fill="#82ca9d" r={3} />;
}

/**customized tooltip for scatter plotst */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    //console.log(payload)
    return (
      <div className="custom-tooltip">
        <p className="label">{`Product : ${payload[0].payload.productId}`}</p>
        <p className="intro">{`Price : ${payload[0].value}`}</p>
        <p className="intro">{`Expense : ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const Row2 = () => {
  const pieColors = ["#8884d8", "#cfcdef"];
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  // console.log(productData)
  const operationalAndNonOpreational = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.charAt(0).toUpperCase() + month.slice(1, 3),
            operationalExpenses: operationalExpenses,
            nonOperationalExpenses: nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const pricesAndExpenses = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          productId: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  return (
    <>
      <AnalyticsBox gridArea={"d"}>
        <BoxHeader
          title="Operational vs. Non-Operational Expenses"
          sideText={"+4%"}
        />
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            width={500}
            height={400}
            data={operationalAndNonOpreational}
            margin={{
              top: 30,
              right: 0,
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
            <YAxis
              yAxisId="left"
              style={{ fontSize: "10px" }}
              domain={[2000, 11000]}
            />
            <YAxis
              yAxisId="right"
              style={{ fontSize: "10px" }}
              orientation="right"
              domain={[2000, 11000]}
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
      <AnalyticsBox gridArea={"e"}>
        <BoxHeader title="Campaigns and Targets" sideText={"+4%"} />
        <FlexBetween mt="1rem">
          <Box flexBasis="20%">
            <PieChart
              width={110}
              height={100}
              margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
            >
              <Pie
                data={pieData}
                innerRadius={15}
                outerRadius={35}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Box>
          <Box ml="-1.6rem" flexBasis="30%" textAlign="center">
            <Typography variant="h6">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3">
              83
            </Typography>
            <Typography variant="body2">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="30%">
            <Typography variant="h6">Losses in Revenue</Typography>
            <Typography variant="body2">Down 25%</Typography>
            <Typography variant="h6">Profit Margins</Typography>
            <Typography variant="body2">Up by 30% from last month</Typography>
          </Box>
        </FlexBetween>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"f"}>
        <BoxHeader title="Product Price vs. Expense" />
        <ResponsiveContainer width="100%" height="80%">
          <ScatterChart
            margin={{
              top: 20,
              right: 30,
              bottom: 10,
              left: -15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="price"
              type="number"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
              domain={[0, 200]}
            />
            <YAxis
              dataKey="expense"
              type="number"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Scatter
              name="Price and Expense Ratio"
              data={pricesAndExpenses}
              shape={scatterDot}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </AnalyticsBox>
    </>
  );
};

export default Row2;
