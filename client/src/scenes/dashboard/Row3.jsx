import AnalyticsBox from "../../components/AnalyticsBox";
import BoxHeader from "../../components/BoxHeader";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  useGetTransactionsQuery,
  useGetProductsQuery,
  useGetKpisQuery,
} from "../../state/apiSlice";
import { PieChart, Pie, Cell } from "recharts";
import { useMemo } from "react";
import FlexBetween from "../../components/FlexBetween";

const Row3 = () => {
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const productCols = [
    { field: "_id", headerName: "Id", flex: 1 },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params) => `$${params.value}`,
    },
  ];
  const transactionCols = [
    { field: "_id", headerName: "Id", flex: 1 },
    { field: "buyer", headerName: "Buyer", flex: 0.67 },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params) => params.value.length,
    },
  ];

  //  const pieData = [
  //    { name: "Group A", value: 400 },
  //    { name: "Group B", value: 300 },
  //  ];

  //console.log (kpiData)
  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpense = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            { name: key, value: Number(value) },
            { name: "rest", value: totalExpense - value },
          ];
        }
      );
    }
  }, [kpiData]);

  console.log(pieChartData);
  const pieColors = ["#cfcdef", "#8884d8"];

  return (
    <>
      <AnalyticsBox gridArea={"g"}>
        <BoxHeader
          title="List of Products"
          sideText={`${productData ? productData.length : 0} products`}
        />
        <Box width="100%" height={100}>
          <DataGrid
            columnHeaderHeight={35}
            rowheight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productCols}
          />
        </Box>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"h"}>
        <BoxHeader
          title="Recent Transactions"
          sideText={`${
            transactionData ? transactionData.length : 0
          } latest entries`}
        />
        <Box width="100%" height={100}>
          <DataGrid
            columnHeaderHeight={35}
            rowheight={35}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionCols}
          />
        </Box>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"i"}>
        <BoxHeader title="Expense Breakdown By Category" sideText={"+4%"} />
        <FlexBetween>
          <PieChart width={110} height={100}>
            <Pie
              data={pieChartData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {pieChartData[0].map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieColors[index % pieColors.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <Typography variant="h6">{pieChartData[0].name}</Typography>
        </FlexBetween>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"j"}></AnalyticsBox>
    </>
  );
};

export default Row3;
