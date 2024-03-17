import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../CustomeComp/PrimaryBtn";
import SecondaryBtn from "../../CustomeComp/SecondaryBtn";
import SvgShape1 from "../../CustomeComp/SvgShape1";
import { S4HPConst } from "../../Const/HomeConst";
import spcialoffer1 from "../../assets/HomeImages/spcialoffer1.png";
const S4HP = () => {
  const navigat = useNavigate();
  const theme = useTheme();
  return (
    <Stack
      component={"section"}
      sx={{
        my: { xs: 10, md: 15 },
        borderBottomRightRadius: "10%",
        borderTopLeftRadius: "20%",
        borderTopRightRadius: "3%",
        borderBottomLeftRadius: "3%",

        position: "relative",
      }}
    >
      <SvgShape1 Option={true} />
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            alt="The house from the offer."
            src={spcialoffer1}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "center",
            padding: ".25rem",
            height: "100%",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              gap: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: { sm: "35px", md: "55px" }, maxWidth: "590px" }}
            >
              Custom{" "}
              <u
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
              >
                Smart
              </u>{" "}
              Business Card
            </Typography>
            <Typography
              variant="caption"
              color={theme.palette.text.secondary}
              sx={{ maxWidth: "560px" }}
            >
              Do you want to get a design that is specific to you or your
              business, share your data and present yourself among your
              customers in a smarter way with Linky and join many of our
              distinguished customers?
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {S4HPConst.map((item, index) => {
                return (
                  <Paper
                    key={`${item.keyword}${item.num}`}
                    variant="outlined"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px 40px",
                      bgcolor: "rgba(9, 121, 196, 0.57)",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography variant="h5">{item.num}</Typography>
                    <Typography>{item.keyword}</Typography>
                  </Paper>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default S4HP;
