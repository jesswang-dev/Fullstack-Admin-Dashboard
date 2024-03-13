import { Grid, Box } from "@mui/material"
import { styled } from "@mui/material"

const CrmBox = styled(Box)(({ theme }) => ({
  borderRadius: 5,
  boxShadow: theme.shadows[1],
  minHeight: 350,
  border: "1px solid black"
  
}));

const Crm = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <CrmBox>Row1 a</CrmBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmBox>Row1 b</CrmBox>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <CrmBox>Row1 c</CrmBox>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <CrmBox>Row2 d</CrmBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmBox>Row2 e</CrmBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmBox>Row3 f</CrmBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmBox>Row3 g</CrmBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CrmBox>Row3 h</CrmBox>
          </Grid>
          <Grid item xs={12} md={5} lg={8}>
            <CrmBox>Row4 i</CrmBox>
          </Grid>
          <Grid item xs={12} md={7} lg={4}>
            <CrmBox>Row4 j</CrmBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Crm
