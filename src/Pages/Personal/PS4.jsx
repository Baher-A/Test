import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Privacy from "../../assets/PersonalImages/Privacy.png";

const PS4 = () => {
  return (
    <Stack sx={{ my: { xs: 15, md: 15 } }}>
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
                //   className="HIdeText Section4Text"
                variant="h7"
              >
                For Personal & Famous
              </Typography>
              <Typography
                // className="HIdeText Section4Text"
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                Privacy is our priority
              </Typography>
              <Typography
                // className="HIdeText Section4Text"
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
              >
                Understand who you are? Helps us configure the settings that are
                ideal for you, to help you maintain your privacy or to spread
                and reach more fans
              </Typography>
              <List
                sx={{
                  textAlign: "center",
                  color: "grey",
                  padding: 0,
                  margin: 0,
                }}
              >
                <ListItem
                  //   className="HIdeText Section4Text"
                  sx={{
                    "&::before": {
                      content: "''",
                      position: "absolute",
                      width: "5px",
                      height: "5px",
                      bgcolor: "skyblue",
                      borderRadius: "50%",
                      left: 0,
                      top: 23,
                    },
                  }}
                >
                  <ListItemText>
                    <Typography variant="caption">
                      We provide a tool to encrypt your content, to prevent
                      intruders from accessing your data or your social media
                      addresses
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  //   className="HIdeText Section4Text"
                  sx={{
                    "&::before": {
                      content: "''",
                      position: "absolute",
                      width: "5px",
                      height: "5px",
                      bgcolor: "skyblue",
                      borderRadius: "50%",
                      left: 0,
                      top: 23,
                    },
                  }}
                >
                  <ListItemText>
                    <Typography variant="caption">
                      We prevent search engine spiders from accessing your
                      account or data
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
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
              <img
                src={Privacy}
                id="PrivacyImg"
                // className="FliprightHidden"
                alt="custom-social-media"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default PS4;
