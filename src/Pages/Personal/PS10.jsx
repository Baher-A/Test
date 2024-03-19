import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SocialMediaimg from "../../CustomeComp/SocialMediaimg";

const PS10 = () => {
  return (
    <Stack sx={{ my: { md: 30, xs: 15 } }}>
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
                //   className="HIdeText Section10Text"
              >
                Advanced tools
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold" }}
                // className="HIdeText Section10Text"
              >
                Advanced tools
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
                // className="HIdeText Section10Text"
              >
                Present your business professionally using unique presentation
                tools. We help you include external content from the most
                popular social media platforms.
                <br /> YouTube ~ SoundCloud ~ Instagram ~ paintrest ~ twitter ~
                Spotify ~ tidal ~ Html Code ~ …. and more
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box id="SocialMed">
              <SocialMediaimg />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default PS10;
