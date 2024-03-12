import { Box } from "@mui/material";
import styled from "@emotion/styled";

const AnalyticsBox = styled(Box)(({theme}) => ({
  borderRadius: 10,
  boxShadow: theme.shadows[4]
}));

export default AnalyticsBox;
