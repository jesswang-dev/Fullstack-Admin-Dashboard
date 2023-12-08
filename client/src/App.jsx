import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { getDesignTokens } from "./theme";
import Layout from "./scenes/layout/Layout";

function App() {
  
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
