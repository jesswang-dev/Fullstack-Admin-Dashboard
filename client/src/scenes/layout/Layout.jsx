import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
// import { Box } from "@mui/material";
// import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid xs={2}>
          <SideBar />
        </Grid>
        <Grid xs={10}>
          <NavBar />
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
