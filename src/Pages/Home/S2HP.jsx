import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { NewGEN } from "../../Const/HomeConst";

import PrimaryBtn from "../../CustomeComp/PrimaryBtn";

const S2HP = () => {
  const theme = useTheme();

  return (
    <Stack
      component={"section"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        flexDirection: { xs: "column", md: "row" },
        height: "100%",
        my: { xs: 10, md: 15 },
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
          width: "50%",
        }}
      >
        <Typography
          component={"h2"}
          variant="h4"
          fontWeight={"bold"}
          textAlign={"center"}
        >
          New Generation of <br />
          <Typography
            sx={{
              color: `${theme.palette.primary.main}`,
              fontWeight: "bold",
              fontSize: { xs: "2.2rem", sm: "3.5rem" },
            }}
            variant="h2"
            component={"span"}
          >
            Smart
          </Typography>{" "}
          Card.
        </Typography>
        <Typography variant="body1" sx={{ my: 5 }} textAlign={"center"}>
          Learn about the capabilities of the new generation of smart cards from
          Linky, and join the future
        </Typography>
        <PrimaryBtn
          content="CONTACT US"
          sx={{
            bgcolor: `${theme.palette.primary.dark}!important`,
            paddingX: "2rem",
            "&:hover": {
              boxShadow:
                theme.palette.mode == "light"
                  ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                  : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
              bgcolor: theme.palette.primary.main,
            },
          }}
        ></PrimaryBtn>
          </Box>
          


          <Stack
        component={"div"}
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
          >
                 <Grid
          container
          spacing={1}
          sx={{ justifyContent: { xs: "space-evenly", md: "center" } }}
              >
                  {NewGEN.map((item, i) => {
                      return (
                        <Grid key={item.title} item xs={12} sm={6} md={5}>
                        <Card
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "30px",
        
                          }}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                              alignItems: "center",
                              padding: "1rem",
                              gap: 1,
                            }}
                          >
                            <Avatar
                              sx={{
                                backgroundImage: item.GradientColor,
                                width: "50px",
                                height: "50px",
                              }}
                            >
                              <item.icon
                                sx={{
                                  color: `white`,
                                  fontWeight: "bold",
                                  fontSize: "2rem",
                                }}
                              />
                            </Avatar>
                            <Typography
                              textAlign={"center"}
                              variant="body1"
                              color={theme.palette.primary.main}
                              fontWeight={"bold"}
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="caption" textAlign={"center"} sx={{color:theme.palette.text.secondary}}>
                              {item.subtitle}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      )
                  })}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default S2HP;
