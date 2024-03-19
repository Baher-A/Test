import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import DigitalPhone from "../../assets/PersonalImages/Digital-Phone.png";
const PS8 = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        width: "100%",
        position: "relative",
        mt: { md: 5, xs: 3 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          height: "380px",
          width: "100%",
          top: 0,
          bgcolor: "#00BDD6",
        }}
      ></Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src={DigitalPhone}
              id="Digitalphone"
            //   className="FliprightHidden"
              alt="Digital-phone"
              style={{ width: "100%", maxWidth: "520px" }}
            />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "column",
              textAlign: "center",

              gap: 2,
            }}
          >
                      <Typography variant="h7"
                        //   className="HIdeText Section8Text"
                      >
              Complete customization of your data
            </Typography>
            <Typography
              variant="h4"
              sx={{ maxWidth: "520px" }}
            //   className="HIdeText Section8Text"
            >
              Present yourself in a unique way that suits you
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ maxWidth: "520px", mb: { md: 10, xs: 0 } }}
            //   className="HIdeText Section8Text"
            >
              Display all your data in a way that expresses you and the content
              you provide, through an integrated set of Linky tools.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PS8;
