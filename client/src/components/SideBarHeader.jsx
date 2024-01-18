import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { deepPurple } from "@mui/material/colors";

const StyledSidebarHeader = styled(Box)({
    width: "100%",
    height: 64,
    // backgroundColor: "aqua",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden"

});

const StyledLogo = styled(Box)({
  width: 35,
  minWidth: 35,
  height: 35,
  minHeight: 35,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: 24,
  fontWeight: 600,
  backgroundColor: deepPurple[900],
  background: "linear-gradient(45deg, #6300EA, #b39ddb)",
});

function SideBarHeader() {
  return (
    <>
      <div className="header-logo">
        <StyledSidebarHeader>
          <StyledLogo>S</StyledLogo>
          <Typography
            variant="subtitle1"
            color={deepPurple[500]}
            fontWeight={700}
            ml={3}
          >
             SmartAdmin 
          </Typography>
        </StyledSidebarHeader>
      </div>
    </>
  );
}

export default SideBarHeader