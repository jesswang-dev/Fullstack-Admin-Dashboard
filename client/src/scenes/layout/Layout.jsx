import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
// import { Box } from "@mui/material";
// import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Grid container columns={16}>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs={15}>
          <Box component="section" sx={{ p: 2, margin: "auto", maxWidth: "1250px" }}>
            <NavBar />
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
