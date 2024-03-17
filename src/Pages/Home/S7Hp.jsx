import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../CustomeComp/PrimaryBtn";
import MobileAppIMG from "../../assets/HomeImages/mobile-app-icons2.png";
import SEC7IMG from "../../assets/HomeImages/section7.png";
const S7Hp = () => {
  const navigat = useNavigate();
  const theme = useTheme();
  return (
    <Grid container component={"section"} sx={{ my: { xs: 10, md: 15 } }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={SEC7IMG} alt="SEC7IMG" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            gap: 3,
          }}
        >
          <Typography component={"h2"} variant="h2">
            Data{" "}
            <u
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              analysis
            </u>
            &
            <br />
            Tracking
          </Typography>
          <Typography variant="caption" sx={{ maxWidth: "720px" }}>
            Get detailed information about your customers and fans through a
            professional control panel that fully displays all the behavior of
            those who visited your profile or scanned the card, in addition to
            the most visited channels from which your customers come.
          </Typography>
          <Box
            component={"img"}
            src={MobileAppIMG}
            sx={{ maxWidth: "274px" }}
          />
          <PrimaryBtn
            content="    READ MORE"
            onClick={() => {
              navigat("./personal");
            }}
            sx={{
              bgcolor: `${theme.palette.primary.dark}!important`,
              paddingX: "2rem",
              mt: 3,
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
      </Grid>
    </Grid>
  );
};

export default S7Hp;
