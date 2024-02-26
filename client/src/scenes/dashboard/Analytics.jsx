import BarChart from "../../components/BarChart"
import { Box } from "@mui/system";

const Analytics = () => {
  const gridTemplate = `
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


  `
  return (
    <>
      <Box
        width="100%"
        height="100%"
        display={"grid"}
        gap={"1.5rem"}
        sx={{
          gridTemplateAreas: gridTemplate,
          gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        }}
      >
        <Box border={"1px solid red"} gridArea={"a"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"b"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"c"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"d"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"e"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"f"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"g"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"h"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"i"}>
          Analytics
        </Box>
        <Box border={"1px solid red"} gridArea={"j"}>
          Analytics
        </Box>
      </Box>
    </>
  );
}

export default Analytics