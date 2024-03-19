import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import CustomeSlider from "../../CustomeComp/CustomeSlider";
import {IconsImage } from "../../Const/PersonalConst"
const PS1 = () => {
  const SwiperRef = useRef(null);

  return (
    <Stack
      sx={{
        mt: "1rem",
        backgroundImage: "linear-gradient(90deg,#c5c5c5,#d5d5d5,#e5e5e5)",
        borderTopRightRadius: { md: "7rem", xs: "3rem" },
        borderBottomLeftRadius: { md: "7rem", xs: "3rem" },
      }}
    >
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="h2"
            //   className="PS1T HIdeText"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Premium <br />
              Smart Card
            </Typography>
            <Typography
            //   className="PS1T HIdeText"
              variant="caption"
              sx={{ color: "grey" }}
            >
              the best selling product in the egyption market <br />
              100mAh - avaliable in all colors
            </Typography>
          </Box>
          <Box
            component={"div"}
            // className="PS1T HIdeText"
            sx={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            {IconsImage.map((icon, i) => {
              return (
                <IconButton
                  onClick={() => {
                    SwiperRef.current.swiper.slideTo(i);
                  }}
                  key={i}
                  sx={{
                    width: "50px",
                    height: "50px",
                    padding: "0px",
                    mr: i != IconsImage.length - 1 ? "10px" : "0px",
                    borderStyle: "unset",
                    ":&hover": {
                      backgroundColor: "none !important",
                    },
                  }}
                >
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </IconButton>
              );
            })}
          </Box>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 3 },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography
            //   className="PS1T HIdeText"
              variant="h5"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              300 EGP
            </Typography>
            <Button
            //   className="PS1T HIdeText"
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                fontWeight: "bold",
                borderRadius: "16px",
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
        <Box
        //   className={`HIdeText  PS1T`}
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CustomeSlider
            SliderImages={IconsImage}
            Slideperview={1}
            Swiperref={SwiperRef}
          />
        </Box>
      </Container>
    </Stack>
  );
};

export default PS1;
