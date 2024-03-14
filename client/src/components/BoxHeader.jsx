import { Box, Typography } from "@mui/material"
import FlexBetween from "./FlexBetween"

function BoxHeader ({title, subtitle, sideText}) {
  return (
    <>
      <FlexBetween margin="0.8rem 1rem 0 1rem">
        <FlexBetween>
          <Box width="100%">
            <Typography variant="h5" mb="-0.1rem">{title}</Typography>
            <Typography variant="body2">{subtitle}</Typography>
          </Box>
        </FlexBetween>
        <Typography variant="h6" fontWeight="700" color="secondary">{sideText}</Typography>
      </FlexBetween>
    </>
  );
}

export default BoxHeader
