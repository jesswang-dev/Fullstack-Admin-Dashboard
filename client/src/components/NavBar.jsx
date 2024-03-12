import { Avatar, Badge, Box, IconButton, InputBase, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../state/global";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";


const AvatarBadge = styled(Badge) (({theme})=> ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 32,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: `4px`,
    borderRadius: `50%`,
  },
}));

const NavBar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode);

  const onClickToggleColorMode = () => {
    dispatch(setMode(mode))
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ border: "1px solid", borderRadius: 1 }}
      mb={2}
    >
      <Box>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="Search (Ctrl+/)" />
      </Box>

      <Box>
        <IconButton onClick={onClickToggleColorMode}>
          {mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <GridViewOutlinedIcon />
        </IconButton>

        <IconButton>
          <Badge color="error" variant="dot">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>

        <IconButton>
          <AvatarBadge color="success" variant="dot">
            <Avatar></Avatar>
          </AvatarBadge>
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
