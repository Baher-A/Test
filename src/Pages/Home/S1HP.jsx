import { Box, Container, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BubbleChart, ShoppingCart } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { HPSliderImages } from "../../Const/HomeConst";
import PrimaryBtn from "../../CustomeComp/PrimaryBtn"
import 'swiper/css';
const S1HP = () => {
  const navigat = useNavigate();
  const theme = useTheme();
  const SwiperRef = useRef(null);
  return (
    <Container
      component={"section"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        mt: 2,
        mb: 15,
      }}
    >
      <Grid
        container
        item
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Side of Section1 */}
        <Grid item xs={12} sm={6}>
          <Stack sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              component={"h2"}
              variant={"h3"}
              color={theme.palette.text.main}
              // className={`HIdeText  HS1T`}
              sx={{
                fontWeight: "bold",
                display: "block",
              }}
            >
              Basic <br />{" "}
              <u
                style={{
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "Linear-gradient(45deg,#29E6FF,#9A2390,#421867)",
                  textDecoration: "none",
                }}
              >
                Smart
              </u>{" "}
              Card
            </Typography>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                variant="subtitle1"
                // className={`HIdeText  HS1T`}
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  fontSize: { md: "20px", xs: "15px" },
                }}
              >
                Color :
              </Typography>
              {HPSliderImages.map((item, i) => {
                return (
                  <IconButton
                    key={item.color}
                    sx={{ color: `${item.color}` }}
                    aria-label={`${item.color}Color`}
                    onClick={() => {
                      SwiperRef.current.swiper.slideTo(i);
                    }}
                  >
                    <BubbleChart
                      sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
                    />
                  </IconButton>
                );
              })}
            </Box>
            <Typography
              variant="caption"
              // className={`HIdeText  HS1T`}
              component={"h6"}
              sx={{
                color: `${theme.palette.text.secondary}`,
              }}
            >
              Choose Your Appropriate Design Or Learn About Design In The Store{" "}
            </Typography>
            <Typography
              // className={`HIdeText  HS1T`}
              variant="h6"
              color={theme.palette.primary.main}
              sx={{
                my: 2,
                fontSize: { xs: "15px", sm: "20px", md: "25px" },
                fontWeight: "bold",
              }}
            >
              200 EGP
            </Typography>
            <PrimaryBtn
              // className={`HIdeText  HS1T`}
              content="order now"
              BTNICON={
                <ShoppingCart
                  fontSize="small"
                  sx={{
                    color: theme.palette.secondary.main,
                    alignSelf: "center",
                    ml: 1,
                  }}
                />
              }
              onClick={() => {
                // navigat("./products/Basic-Smart-Card");
              }}
              sx={{
                paddingX: "2rem",
                whiteSpace: "nowrap",
                bgcolor: `${theme.palette.primary.dark}!important`,
                "&:hover": {
                  boxShadow:
                    theme.palette.mode == "light"
                      ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                      : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
                  bgcolor: theme.palette.primary.main,
                },
              }}
            ></PrimaryBtn>
          </Stack>
        </Grid>
        {/* End Left Side of Section1 */}

        {/* Right Side of Section1 */}
        <Grid
          // className={`HIdeText  HS1T`}
          item
          xs={12}
          sm={6}
          sx={{ position: "relative", transition: "all .5s ease-in-out" }}
        >
          <Swiper ref={SwiperRef} slidesPerView={1} >
            {HPSliderImages.map((slide, index) => {
              return (
                <SwiperSlide key={slide.name}>
                  <Box
                    component={'img'}
                    src={slide.img}
                    sx={{ width: "100%", minWidth: "300px" }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
        {/* End Right Side of Section1 */}
      </Grid>
    </Container>
  );
};

export default S1HP;
