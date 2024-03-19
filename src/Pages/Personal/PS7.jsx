import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import QRCodeDesign from "../../CustomeComp/QRCodeDesign";

// import section7 from "../../assets/HomeImages/section7.png";
const PS7 = () => {
  const ModeColor = useTheme().palette.mode;

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
                //   className="HIdeText Section7Text"
                variant="h7"
              >
                Next Qr Generation
              </Typography>
              <Typography
                // className="HIdeText Section7Text"
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                Full customize Your Qr code
              </Typography>
              <Typography
                id="qrCaption"
                // className="HIdeText Section7Text"
                variant="caption"
                sx={{ color: "grey", maxWidth: "480px" }}
              >
                We help you design a unique QR. Add your own text or logo to the
                QR and specify the color, size and other details
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              id="qrsection"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <QRCodeDesign ModeColor={ModeColor} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default PS7;
