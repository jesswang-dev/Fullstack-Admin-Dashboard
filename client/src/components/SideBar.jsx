import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SideBarHeader from "./SideBarHeader";

const menuItemStyles = {};


const SideBarGroupLabel = styled(Typography) ({
  marginLeft: 25,
  marginTop: 10,
  fontSize: 12,
})

function SideBar() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
        <Sidebar collapsed={collapsed}>
          <SideBarHeader />

          <Menu
            menuItemStyles={{
              button: {[`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
              }
        },
            }}
            onMouseOver={() => setCollapsed(false)}
            onMouseOut={() => setCollapsed(true)}
          >
            <SubMenu label="Dashboard" icon={<HomeOutlinedIcon />}>
              <MenuItem component={<NavLink to="/dashboard/analytics" />}>
                Analytics
              </MenuItem>
              <MenuItem> CRM </MenuItem>
              <MenuItem> ECommerce </MenuItem>
            </SubMenu>

            <SideBarGroupLabel>APP</SideBarGroupLabel>

            <MenuItem
              icon={<CalendarMonthOutlinedIcon />}
              component={<NavLink to="/app/calendar" />}
            >
              Calendar
            </MenuItem>

            <SideBarGroupLabel>TEAM</SideBarGroupLabel>

            <MenuItem
              icon={<ContactsOutlinedIcon />}
              component={<NavLink to="/team/contact" />}
            >
              Contacts
            </MenuItem>

            <SideBarGroupLabel>CHART</SideBarGroupLabel>

            <MenuItem
              icon={<ShowChartOutlinedIcon />}
              component={<NavLink to="/chart" />}
            >
              Charts
            </MenuItem>
          </Menu>
        </Sidebar>
      </Box>
    </>
  );
}

export default SideBar;
