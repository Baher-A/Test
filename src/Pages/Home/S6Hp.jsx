import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import PrimaryBtn from "../../CustomeComp/PrimaryBtn";
import Sectionimg6 from "../../assets/HomeImages/Sectionimg6.png";
const S6Hp = () => {
  const theme = useTheme();
  return (
    <Container sx={{ my: { xs: 10, md: 15 } }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid
          item
          xs={12}
          md={6}
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
            src={Sectionimg6}
            alt="Section6Img"
            sx={{
              maxWidth: "480px",
              maxHeight: "520px",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "center",
            width: "100%",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Get Your Full <br />
            <u
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Customize
            </u>{" "}
            Profile
          </Typography>
          <Typography
            variant="caption"
            component={"h6"}
            sx={{ mt: 5, color: theme.palette.text.secondary }}
          >
            Create something unique and design your profile to fully express you
            through a set of professional tools that do not require any
            programming experience.
          </Typography>
          <PrimaryBtn
            content="CONTACT US"
            sx={{
              bgcolor: `${theme.palette.primary.dark}!important`,
              paddingX: "2rem",
              mt: 5,
              "&:hover": {
                boxShadow:
                  theme.palette.mode == "light"
                    ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                    : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                bgcolor: theme.palette.primary.main,
              },
            }}
          ></PrimaryBtn>
        </Grid>
      </Grid>
    </Container>
  );
};

export default S6Hp;
