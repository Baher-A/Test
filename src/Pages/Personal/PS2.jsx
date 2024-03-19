import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import BG1 from "../../assets/PersonalImages/bg2.png";
import BG2 from "../../assets/PersonalImages/bg3.png";
import { ListContennt } from "../../Const/About";
const PS2 = () => {
  const theme = useTheme();

  return (
    <Container sx={{ my: 20 }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          id="LinkySolution"
          sx={{ color: "grey", fontWeight: "bold" }}
          //   className="FliptopHidden"
        >
          Linky Solution
        </Typography>
        <Typography
          variant="h4"
          sx={{ maxWidth: "566px" }}
          id="Allin"
          //   className="FliptopHidden"
        >
          All-in-one{" "}
          <u
            style={{
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            Business Card
          </u>{" "}
          for managing your Data
        </Typography>
      </Box>
      <Grid container>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <List
            //   className="HIdeText LIsttext"
            >
              {ListContennt.map((item, i) => (
                <ListItem
                  key={i}
                  sx={{
                    "&:hover .child0": {
                      border: `2px solid ${theme.palette.primary.main}`,
                    },
                    "&:hover .child1": {
                      border: `2px solid ${theme.palette.primary.main}`,
                    },
                    "&:hover .child2": {
                      border: `2px solid ${theme.palette.primary.main}`,
                    },
                    "&:hover .child3": {
                      border: `2px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <ListItemIcon
                    className={`child${i}`}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px solid grey",
                      borderRadius: "50%",
                      padding: "20px",
                      mr: "10px",
                      "&:hover": {
                        border: `2px solid ${theme.palette.primary.main}`,
                      },
                    }}
                  >
                    <item.Icon
                      sx={{
                        color: `${theme.palette.primary.main}`,
                        fontSize: "35px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "grey" }}>
                      {item.caption}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component={"img"}
              src={BG1}
              id="bg1"
              //   className="FliptopHidden"
              alt=""
              style={{ width: "100%", maxWidth: "330px" }}
            />
          </Box>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component={"img"}
              src={BG2}
              id="bg2"
              //   className="FliprightHidden"
              alt=""
              style={{ width: "100%", maxWidth: "330px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PS2;
