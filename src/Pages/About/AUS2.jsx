import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { OurHero } from "../../Const/About";
const AUS2 = () => {
  return (
    <Container component={"div"} sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          sx={{ fontWeight: "bold", color: "#29E6FF" }}
        >
          Meet
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          Our Hero's
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "grey", textAlign: "center" }}
        >
          We are always working to develop our services and obtaining the
          satisfaction of our customers is essential to us
        </Typography>
      </Box>
      <Grid container mt={3} spacing={4}>
        {OurHero.map((Hero, Index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={Hero.Name}>
              <Paper
                elevation={24}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "25px",
                  width: "100%",
                }}
              >
                <Box
                  component={"img"}
                  src={Hero.img}
                  alt={Hero.Name}
                  style={{ width: "100%", borderRadius: "25px" }}
                />
              </Paper>
              <Typography
                variant="subtitle1"
                textAlign={"center"}
                mt={3}
                fontWeight={600}
              >
                {Hero.Name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "grey", textAlign: "center" }}
              >
                {Hero.CurrentPosition}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AUS2;
