import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useTheme,
  Stack,
} from "@mui/material";

import {
  Close,
  DarkMode,
  Hub,
  LightMode,
  Menu,

} from "@mui/icons-material";
import { appitems } from "../../Const/APPBarConst";
import Logo from "../../assets/AppBarImages/MainLogo.png";
import { ScrolToOoTop } from "../../Const/ProductConst"
const AppBarr = ({ themeMoode, SetthemeMoode }) => {
  const theme = useTheme();
    const  navigate = useNavigate();
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <AppBar
      id="AppBar"
      position="fixed"
      sx={{
        transition: "all .5s",
        "&:hover": { opacity: "1 !important" },
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ alignItems: "center" }}>
          <Link
            sx={{ cursor: "pointer" }}
            onClick={() => {
                navigate("/Test");
              //   ScrollToTopPAge();
            }}
          >
            <Box
              component={"img"}
              src={Logo}
              sx={{ width: "180px", height: "80" }}
            />
          </Link>
          <Stack
            sx={{
              display: { xs: "flex", md: "none" },
                          justifyContent: "right",
              flexDirection:'row',
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Menu icon OF AppBar 'll not Appear If Width less than 1080 */}
            <IconButton
              size="medium"
              sx={{ mr: "2px" }}
              onClick={() => {
                setToggleMenu(!ToggleMenu);
              }}
            >
              <Menu />
            </IconButton>
            <Typography variant="caption" sx={{ cursor: "pointer" }}>
              MENU
            </Typography>
          </Stack>
          {/* ################################### Close Menu icon ###################################  */}

          <Stack
            sx={{
              flexGrow: "1",
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
                          mr: { sm: "2rem" },
              flexDirection:'row'
            }}
          >
            {appitems.map((item, i) => {
              return (
                <Link
                  onClick={() => {
                    navigate(item.path);
                    ScrolToOoTop();
                  }}
                  key={`${item.name} ${i}`}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: 'white',
                    cursor: "pointer",
                    padding: "3px",
                    transition: "all .5s ease-out",
                    mr: i != appitems.length - 1 ? "1.5rem" : "0px",
                    "&:hover": {
                      color: `gold`,
                      bgcolor: "unset",
                    },
                  }}
                >
                  <Typography fontWeight={"bold"}>{item.name}</Typography>
                </Link>
              );
            })}
          </Stack>

          <Stack sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
              onClick={() => {
                themeMoode == "light"
                  ? SetthemeMoode("dark")
                  : SetthemeMoode("light");
              }}
            >
              {themeMoode !== "dark" ? (
                <DarkMode sx={{ color: "rgba(255,255,255,0.7)" }} />
              ) : (
                <LightMode sx={{ color: `gold` }} />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
      <Stack
        className={ToggleMenu == false ? "CloseMenu" : "OpenMenu"}
        sx={{
          position: "fixed",
          left: ".5vw",
          top: "20vh",
          borderRadius: "20px",
          width: "240px",
          opacity: 1,
          bgcolor: "rgba(255,255,255,0.2)",
          display: { xs: "flex", md: "none" },
        }}
      >
        <List
          sx={{
            width: "100%",
            position: "relative",
            padding: "0px",
            margin: 0,
            bgcolor: "rgba(0,0,0,0.8)",
            borderRadius: "20px",
            boxShadow: "0 0 5px 10px rgba(0,0,0,0.5)",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 18px",
            }}
          >
            <IconButton
              sx={{
                justifySelf: "flex-end",
                position: "relative",
                bgcolor: "rgba(255,255,255,0.1)",
              }}
              onClick={() => {
                themeMoode == "light"
                  ? SetthemeMoode("dark")
                  : SetthemeMoode("light");
              }}
            >
              {themeMoode !== "dark" ? (
                <DarkMode
                  fontSize="small"
                  sx={{ color: "rgba(255,255,255,1)" }}
                />
              ) : (
                <LightMode fontSize="small" sx={{ color: `gold` }} />
              )}
            </IconButton>
            <IconButton
              sx={{
                justifySelf: "flex-end",
                position: "relative",
                bgcolor: "rgba(255,255,255,0.1)",
              }}
              onClick={() => {
                setToggleMenu(!ToggleMenu);
              }}
            >
              <Close
                fontSize="small"
                sx={{ color: "white", fontWeight: "bold" }}
              />
            </IconButton>
          </ListItem>
          {appitems.map((item, i) => {
            return (
              <ListItem sx={{ display: "flex" }} key={`${item.name}${i}`}>
                <ListItemButton
                  sx={{
                    borderRadius: "16px",
                    fontWeight: "bold",
                    display: "flex",
                    alignContent: "center",
                    padding: "10px",
                  }}
                  onClick={() => {
                    navigate(item.path);
                    ScrolToOoTop();
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#0aa6c3",
                    }}
                  >
                    <item.icon
                      fontSize="medium"
                      sx={{ color: theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <Typography
                    variant="subtitle1"
                    color={"white"}
                    fontWeight={"bold"}
                  >
                    {item.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </AppBar>
  );
};

export default AppBarr;
