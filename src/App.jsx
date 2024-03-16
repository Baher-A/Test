import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";

// import { Home } from "@mui/icons-material";
import AppBarr from "./Pages/AppBarPage/AppBarr";

function App() {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  // Toggle Function To open and close drawer
  const toggleDrawer = (V) => () => {
    setOpenDrawer(V);
  };

  const [themeMoode, SetthemeMoode] = useState("dark");
  const MyTheme = createTheme({
    palette: {
      mode: `${themeMoode}`,
      ...(themeMoode === "dark"
        ? {
            favcolor: {
              main: "#FFF",
            },
            ReviewText: {
              main: "black",
            },
            ReviewButtonText: {
              main: "#bdbdbd",
            },
          }
        : {
            favcolor: {
              main: "#AAA",
            },
            background: {
              default: "#EEE ",
              paper: "#EEF",
            },
            ReviewText: {
              main: "white",
            },
            ReviewButtonText: {
              main: "#e0e0e0",
            },
          }),
    },
  });

  // ******************* //
  // Variable To Toogle Mode Change
 

  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      
      <AppBarr themeMoode={themeMoode} SetthemeMoode={SetthemeMoode} />
      

      <Outlet />

    </ThemeProvider>
  );
}

export default App;
