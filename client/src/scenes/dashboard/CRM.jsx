import { Grid, Box } from "@mui/material"
import styled from "@mui/material"

const CRMBox = styled(Box)(({ theme }) => ({
  borderRadius: 10,
  boxShadow: theme.shadows[4],
}));

export const CRM = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6} md={8}>
            <CRMBox>xs=6 md=8</CRMBox>
          </Grid>
          <Grid item xs={6} md={4}>
            <CRMBox>xs=6 md=4</CRMBox>
          </Grid>
          <Grid item xs={6} md={4}>
            <CRMBox>xs=6 md=4</CRMBox>
          </Grid>
          <Grid item xs={6} md={8}>
            <CRMBox>xs=6 md=8</CRMBox>
          </Grid>
        </Grid>
      </Box>
  );
}
