import { useMediaQuery } from "@mui/material";
// import BarChart from "../../components/BarChart"
import { Box } from "@mui/system";
import AnalyticsBox from "../../components/AnalyticsBox";

  const gridTemplateLarge = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
  `;

  const gridTemplateMedium = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
  `;

const Analytics = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width:1200px)');

  return (
    <>
      <Box
        width="100%"
        height="100%"
        display={"grid"}
        gap={"1rem"}
        sx={
          isAboveMediumScreen
            ? {
                gridTemplateAreas: gridTemplateLarge,
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              }
            : {
                gridTemplateAreas: gridTemplateMedium,
                gridAutoColumns: "1fr",
                gridAutoRows: "80px",
              }
        }
      >
        <AnalyticsBox gridArea={"a"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"b"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"c"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"d"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"e"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"f"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"g"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"h"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"i"}>
        </AnalyticsBox>
        <AnalyticsBox gridArea={"j"}>
        </AnalyticsBox>
      </Box>
    </>
  );
}

export default Analytics