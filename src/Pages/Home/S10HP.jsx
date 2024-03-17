import React from 'react'
import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import SecondaryBtn from "../../CustomeComp/SecondaryBtn";
import PrimaryBtn from "../../CustomeComp/PrimaryBtn";
import { DataSection10 } from "../../Const/HomeConst";
  import VideoComp from "../../CustomeComp/VideoComp";
const S10HP = () => {
  const theme = useTheme();

  return (
    <Container
      component={"section"}
      sx={{
        gap: 3,
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 10, md: 15 },
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          objectFit: "cover",
          width: { xs: "100%", md: "50%" },
        }}
      >
        {/* <VideoComp /> */}
      </Paper>

      <Box
        sx={{
          textAlign: "center",

          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          height: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.text, fontWeight: "bold" }}
        >
          Own{" "}
          <u
            style={{
              color: `${theme.palette.primary.main}`,
              textDecoration: "none",
            }}
          >
            technology
          </u>{" "}
          <br />
          of the future
        </Typography>
        <Typography
          variant="caption"
          component={"h6"}
          color={theme.palette.grey[500]}
          mt={3}
        >
          Step ahead of your competitors by owning new generation communication
          technology
        </Typography>
        <Box component={"div"} sx={{ width: "100%", textAlign: "left", mt: 3 }}>
          <Box
            sx={{
              bgcolor: theme.palette.text.secondary,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              borderRadius: "15px",
              color: "#DDD",
            }}
          >
            <Typography
              variant="caption"
              component={"h6"}
              sx={{
                bgcolor: theme.palette.primary.main,
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "15px",
                padding: "5px",
                color: "#FFF",
                fontWeight: "bold",
                textDecoration: "none",
                objectFit: "fill",
                width: "94%",
                height: "100%",
              }}
            >
              Customers satisfied with the service
              <Typography
                variant="caption"
                component={"span"}
                fontWeight={"bold"}
                color={"white"}
              >
                94%
              </Typography>
            </Typography>
          </Box>
          <Grid container component={"div"} mt={3}>
            {DataSection10.map((item, i) => {
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
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              
            }}
          >
            <PrimaryBtn
              content="JOIN NOW"
              sx={{
                fontWeight: "bold",
                mr: 3,
                bgcolor: theme.palette.primary.main,

                "&:hover": {
                  boxShadow:
                  theme.palette.mode == "light"
                    ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                    : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            ></PrimaryBtn>
            <SecondaryBtn
              content="GET TICKET"
              sx={{
                // color: `${theme.palette.text.primary}`,
                padding: '8px 12px !important',
                fontSize:'85%',
         
                "&:hover": {
                  boxShadow:
                    theme.palette.mode == "light"
                      ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                      : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              
            </SecondaryBtn>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default S10HP