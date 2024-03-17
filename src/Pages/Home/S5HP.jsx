import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { TableS5HP } from "../../Const/HomeConst";
import LawerIMage from "../../assets/HomeImages/lawyer.png";
import SecondaryBtn from "../../CustomeComp/SecondaryBtn";
import LogoesSlider from "../../CustomeComp/LogoesSlider";
const S5HP = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      component={"section"}
      sx={{
        alignItems: "center",
        justifyItems: "center",
        my: { xs: 10, md: 15 },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          sx={{
            width: "100%",
            maxWidth: "507px",
            maxHeight: "768px",
            justifyContent: "center",
            objectFit: "contain",
            display: "flex",
          }}
          alt="LawyerImgalt"
          src={LawerIMage}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: "center", width: "100%" }}>
        <Typography
          component={"div"}
          sx={{
            padding: "10px",
            color: theme.palette.text.secondary,
            fontSize: "25px",
          }}
        >
          Top Partners & Customers
        </Typography>
        <Typography
          variant="h2"
          component={"h4"}
          sx={{ padding: "10px", color: theme.palette.primary.main }}
        >
          Meet Our Top <br />
          Customers
        </Typography>
        <Grid
          container
          component={"div"}
          sx={{
            textAlign: "center",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          {TableS5HP.map((el, Index) => {
            return (
              <Grid
                key={el.KeyWord}
                item
                xs={4}
                sx={{ gridTemplateColumns: "2", width: "100%", height: "100%" }}
              >
                <Typography
                  variant={"body1"}
                  component={"h4"}
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                  }}
                >
                  {el.Num}
                </Typography>
                <Typography
                  component={"h4"}
                  sx={{
                    fontSize: {
                      sm: ".7rem",
                      md: ".9rem",
                      lg: "1.25rem",
                      color: theme.palette.text.secondary,
                    },
                    fontWeight: "bold",
                  }}
                >
                  {el.KeyWord}
                </Typography>
              </Grid>
            );
          })}
          <SecondaryBtn
            sx={{
              mt: 5,
              padding: "10px 20px !important",
              lineheight: 1.5,
              "&:hover": {
                boxShadow:
                  theme.palette.mode == "light"
                    ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                    : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                bgcolor: theme.palette.primary.dark,
              },
            }}
            content={"CHECK IT NOW"}
          ></SecondaryBtn>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ bgcolor: "#a4a4a414" }}>
        <LogoesSlider />
      </Grid>
    </Grid>
  );
};

export default S5HP;
