import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
// import { Box } from "@mui/material";
// import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Grid container>
        <Grid xs={1}>
          <SideBar />
        </Grid>
        <Grid xs={11}>
          <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
            <NavBar />
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
