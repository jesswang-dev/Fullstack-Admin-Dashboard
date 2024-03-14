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

  //console.log(pieChartData);
  const pieColors = ["#8884d8", "#cfcdef"];

  return (
    <>
      <AnalyticsBox gridArea={"g"} maxHeight={350}>
        <BoxHeader
          title="List of Products"
          sideText={`${productData ? productData.length : 0} products`}
        />
        <Box width="100%" height="80%">
          <DataGrid
            columnHeaderHeight={35}
            rowheight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productCols}
          />
        </Box>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"h"} maxHeight={480}>
        <BoxHeader
          title="Recent Transactions"
          sideText={`${
            transactionData ? transactionData.length : 0
          } latest entries`}
        />
        <Box width="100%" height="85%">
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
        <FlexBetween mt={"1rem"}>
          {pieChartData
            ? pieChartData.map((data, i) => {
                return (
                  <Box key={`box-${data[0].name}-${i}`}>
                    <PieChart width={110} height={100}>
                      <Pie
                        data={data}
                        innerRadius={18}
                        outerRadius={38}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                        stroke="none"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={pieColors[index % pieColors.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                    <Typography variant="h6" textAlign={"center"}>
                      {data[0].name[0].toLocaleUpperCase() +
                        data[0].name.slice(1)}
                    </Typography>
                  </Box>
                );
              })
            : []}
        </FlexBetween>
      </AnalyticsBox>
      <AnalyticsBox gridArea={"j"}>
        <BoxHeader
          title="Overall Summary and Explanation Data"
          sideText={"+18%"}
        />
        <Box
          height={15}
          borderRadius="1rem"
          bgcolor={"#cfcdef"}
          margin="0.8rem 1rem 0 1rem"
        >
          <Box
            height={15}
            width={"40%"}
            borderRadius="1rem"
            bgcolor={"#8884d8"}
          ></Box>
        </Box>

        <Box margin="0.8rem 1rem 0 1rem">
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit imperdiet justo in lobortis. Proin eget ornare nisi, a
            lacinia neque. Aliquam augue libero, elementum et porttitor sed,
            fermentum ut metus. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.{" "}
          </Typography>
        </Box>
      </AnalyticsBox>
    </>
  );
};

export default Row3;
