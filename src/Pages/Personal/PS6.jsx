import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BFimg from "../../assets/PersonalImages/1.jpg";

const PS6 = () => {
  return (
    <Stack sx={{ my: { md: 20, xs: 15 } }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h7"
                //   className="HIdeText Section6Text"
              >
                data communication technology
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold" }}
                // className="HIdeText Section6Text"
              >
                Different ways for a faster connection
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
                // className="HIdeText Section6Text"
              >
                Your personal card provides you with different ways to
                communicate
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
                          <Box
                              component={'img'}
                id="BFimg"
                // className="FliprightHidden"
                src={BFimg}
                alt="BFimg"
                sx={{ width: "100%", borderRadius:'35px' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default PS6;
