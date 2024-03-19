import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import DataDiagram from "../../CustomeComp/DataDiagram";
const PS9 = () => {
  return (
    <Stack sx={{ my: { md: 15, xs: 15 } }}>
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
                //   className="HIdeText Section9Text"
              >
                personal cards analisis
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold" }}
                // className="HIdeText Section9Text"
              >
                Stats And Reports All The Time
              </Typography>
              <Typography
                id="darrr"
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
                // className="HIdeText Section9Text"
              >
                We provide a dashboard to track and know all possible statistics
                about your fans and visitors, who used to connect to your
                personal card
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "start",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
              id="Ddigramm"
            >
              <DataDiagram />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default PS9;
