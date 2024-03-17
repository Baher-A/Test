import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import PrimaryBtn from "../../CustomeComp/PrimaryBtn";
import SecondaryBtn from "../../CustomeComp/SecondaryBtn";
import { DataSection } from "../../Const/HomeConst";
import ConferanceImg from "../../assets/HomeImages/imgAGE.png";
const S8HP = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      component={"section"}
      sx={{
        my: { xs: 10, md: 15 },
        // bgcolor: "rgba(0 ,153 ,255, 0.12)",
        position: "relative",
      }}
    >
      {/* <SVGSHAPE Option={false} /> */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Business cooperation
          </Typography>
          <Typography
            variant="caption"
            fontWeight="bold"
            color={theme.palette.grey[500]}
          >
            Share our success and join the list of our distinguished partners
          </Typography>
          <Grid container component={"div"}>
            {DataSection.map((item, i) => {
              return (
                <Grid item xs={4} key={item.Title}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color={theme.palette.primary.main}
                    >
                      {item.number}{" "}
                    </Typography>
                    <Typography variant={"h7"} fontWeight="bold">
                      {item.Title}
                    </Typography>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      color={theme.palette.grey[500]}
                    >
                      {item.Caption}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 3,
            }}
          >
            <PrimaryBtn
              content=" MAKE A DEAL"
              sx={{
                bgcolor: `${theme.palette.primary.dark}!important`,
                mr: 3,
              }}
            ></PrimaryBtn>
            <SecondaryBtn
              content="Contact Us"
              sx={{
                padding: "8px 12px",
                fontWeight: "600 !important",
                fontSize: "90%",
                outlineColor: `${theme.palette.text.primary}!important`,
              }}
            ></SecondaryBtn>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 0, md: "3rem" },
          }}
        >
          <img
            src={ConferanceImg}
            alt="ConferanceImg"
            style={{ maxWidth: "680px", minWidth: "450px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default S8HP;
