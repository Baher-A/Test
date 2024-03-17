import React from "react";
import { Lists, Info } from "../Const/FooterConst";
import { socialIcons } from "../Const/HomeConst";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  IconButton,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import FooterLogo from "../assets/FooterImages/footer-logo.png";
import PaymentLogoes from "../assets/FooterImages/payment-poster.png";
import PaymentLogo from "../assets/FooterImages/payments.png";
const FoOooOoter = () => {
  const theme = useTheme();
  const nav = useNavigate();
  return (
    <Stack component={"footer"} sx={{ backgroundColor: "rgb(221,113,116)" }}>
      <Stack sx={{ backgroundColor: "#092143" }}>
        <Container sx={{}}>
          <Grid container>
            {Info.map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    gap: 1,
                  }}
                >
                  <IconButton>
                    <item.icon
                      fontSize="large"
                      sx={{ color: orange[600], fontSize: "60px" }}
                    />
                  </IconButton>
                  <Typography variant="h7" color={"white"}>
                    {item.text1}
                    <br />
                    {item.text2}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <hr style={{ width: "100%", color: grey[500] }} />
            {Lists.map((item, index) => (
              <Grid item xs={6} md={2} key={item.name} sx={{ padding: "20px" }}>
                <Link className="FooterLinks">{item.name}</Link>
                {item.items.map((i, ind) => (
                  <ListItem key={i} sx={{ padding: "10px 0px" }}>
                    <Link className="FooterLinks">{i}</Link>
                  </ListItem>
                ))}
              </Grid>
            ))}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  gap: 1,
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={FooterLogo}
                  alt="Footer-Logo"
                  style={{ width: "100%", maxWidth: "400px" }}
                />
                <Typography variant="h7" color={"white"}>
                  We work to help companies and individuals achieve digital
                  transformation
                </Typography>
                <Typography variant="caption" color={"grey"}>
                  Will be used in accordance with our Privacy Policy
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <hr style={{ width: "100%", color: grey[500] }} />
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              my: 3,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                textAlign: "center",
              }}
            >
              <Typography
                variant="h7"
                color={"white"}
                sx={{ display: "block", padding: "10px" }}
              >
                Payment System:
              </Typography>
              <Box
                component={"img"}
                src={PaymentLogoes}
                sx={{ Padding: "10px" }}
              />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }}>
              <Typography
                variant="h7"
                color={"white"}
                sx={{ display: "block", padding: "10px" }}
              >
                Our Social Links:
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {socialIcons.map((item, index) => (
                  <IconButton key={index} sx={{ bgcolor: `${item.bgc}` }}>
                    <item.icon fontSize="small" sx={{ color: "white" }} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
        </Container>
      </Stack>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography variant="body2" sx={{ Padding: "10px", color: "#FFF" }}>
          Own By Linky 2020 all rights are save.
        </Typography>

        <Box component={"img"} src={PaymentLogo} sx={{ Padding: "10px" }} />
      </Container>
    </Stack>
  );
};

export default FoOooOoter;
