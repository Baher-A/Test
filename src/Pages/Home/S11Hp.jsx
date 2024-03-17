import {
  Avatar,
  Backdrop,
  Box,
  Card,
  Container,
  Typography,
  useTheme,
  Alert,
  Snackbar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import SecondaryBtn from "../../CustomeComp/SecondaryBtn";
import { CardContant } from "../../Const/HomeConst";
import ReviewComp from "../../CustomeComp/ReviewComp";
const S11Hp = () => {
  const [OpenReviewProp, setOpenReviewProp] = useState(false);
  const [ReviewCompelete, setReviewCompelete] = useState(false);
  const theme = useTheme();
  const COntainerRef = useRef();
  return (
    <Container
      component={"div"}
      ref={COntainerRef}
      sx={{ my: { xs: 10, md: 15 } }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant={"h6"} color={theme.palette.primary.main}>
          Check out our latest
        </Typography>
        <Typography
          variant={"h4"}
          fontWeight="bold"
          color={theme.palette.primary.main}
          padding={"10px"}
        >
          Subscriber reviews
        </Typography>
        <Typography variant={"subtitle1"} color={theme.palette.grey[500]}>
          Clients to whom we are proud to provide our services and cooperate
          with them personally and commercially
        </Typography>
      </Box>
      <Swiper
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        onChange={() => {
          console.log();
        }}
      >
        {CardContant.map((item, index) => {
          return (
            <SwiperSlide key={item.name}>
              <Card
                elevation={3}
                sx={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "10px",
                  cursor: "grab",
                }}
              >
                <Avatar
                  src={item.img}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    objectFit: "cover",
                    width: "70px",
                    height: "70px",
                  }}
                />
                <Box sx={{ textAlign: "center" }} component={"footer"}>
                  <Typography
                    variant="caption"
                    color={theme.palette.text.secondary}
                    fontWeight={"bold"}
                  >
                    {item.caption}
                  </Typography>
                  <br />
                  <Typography
                    variant="caption"
                    component={"span"}
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.name}

                    <Typography variant="caption" component={"span"}>
                      {" - "}
                      {item.subtitle}
                    </Typography>
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          );
        })}
        <SecondaryBtn
          content="LEAVE A REVIEW"
          sx={{
            fontWeight: "bold",

            color: `white`,
            mt: 3,
            padding: "0.8rem 1rem !important ",
            bgcolor: theme.palette.secondary.main,
            alignSelf: "center",
            // borderColor: theme.palette.secondary.main,
            "&:hover": {
              boxShadow:
                theme.palette.mode == "light"
                  ? `1px 1px  5px 5px rgba(0,0,0,.3) !important`
                  : `0px 0px  5px 5px rgba(255,255,255,.3) !important`,
              bgcolor: theme.palette.primary.dark,
            },
          }}
          onClick={() => {
            setOpenReviewProp(!OpenReviewProp);
          }}
        ></SecondaryBtn>
      </Swiper>
      <Backdrop sx={{ zIndex: 5 }} open={OpenReviewProp}>
        <ReviewComp
          OpenReviewProp={OpenReviewProp}
          setOpenReviewProp={setOpenReviewProp}
          setReviewCompelete={setReviewCompelete}
        />
      </Backdrop>
      <Snackbar
        name="snachbar"
        open={ReviewCompelete}
        autoHideDuration={5000}
        onClose={() => {
          setReviewCompelete(false);
        }}
      >
        <Alert
          name="Alert"
          onClose={() => {
            setReviewCompelete(false);
          }}
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "white" }}
        >
          Done ... Thank You sir for u Review
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default S11Hp;
