import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ReviewFormDetails,
  socialIcons as SocialIcons,
} from ".././Const/HomeConst";

const ReviewComp = ({
  setOpenReviewProp,
  OpenReviewProp,
  setReviewCompelete,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customeCode, setCustomeCode] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const Mytheme = useTheme();
  const handleSubmit = () => {
    if (
      name != "" &&
      email != "" &&
      customeCode != undefined &&
      reviewMessage != ""
    ) {
      setReviewCompelete(true);
      setName("");
      setEmail("");
      setCustomeCode("");
      setReviewMessage("");
      setTimeout(() => {
        setOpenReviewProp(false);
      }, 2000);
    } else if (name == "") {
      document.getElementById("CustomerName").focus();
    } else if (email == "") {
      document.getElementById("CustomerEmail").focus();
    } else if (customeCode == undefined) {
      document.getElementById("CustomerCode").focus();
    } else if (reviewMessage == "") {
      document.getElementById("CustomerReview").focus();
    }
  };
  return (
    <Grid
      className={
        OpenReviewProp == false ? "ReviewformonClose" : "ReviewformonOpen"
      }
      container
      sx={{ width: { xs: "85%", lg: "62%" }, mx: "auto", zIndex: 6 }}
    >
      <Grid
        component={"form"}
        item
        xs={12}
        md={7}
        sx={{
          bgcolor: Mytheme.palette.mode == "dark" ? "#1e1e1e" : "#DDD",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: 2,
          }}
        >
          <Typography
            component={"h2"}
            variant="h5"
            color={Mytheme.palette.primary.main}
            fontWeight={"bold"}
          >
            Put Your Review :
          </Typography>
          <TextField
            label="Your Name "
            // helperText="That field must fill"
            value={name}
            id="CustomerName"
            variant="standard"
            required
            onChange={(V) => {
              setName(V.target.value);
            }}
            type="text"
          />
          <TextField
            label="Your Email "
            name="Email Field"
            type="email"
            id="CustomerEmail"
            variant="standard"
            value={email}
            onChange={(V) => {
              setEmail(V.target.value);
            }}
            required
          />
          <TextField
            label="Customer Code "
            type="number"
            id="CustomerCode"
            variant="standard"
            value={customeCode}
            onChange={(V) => {
              setCustomeCode(V.target.value);
            }}
            required
          />
          <TextField
            label="Your Review"
            id="CustomerReview"
            variant="standard"
            required
            multiline
            maxRows={5}
            value={reviewMessage}
            onChange={(V) => {
              setReviewMessage(V.target.value);
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              fontWeight: "bold",
              borderRadius: "5px",
              padding: "6px 20px",
            }}
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={5}
        sx={{
          position: "relative",
          bgcolor: Mytheme.palette.mode == "light" ? "#1e1e1e" : "#DDD",
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            color: Mytheme.palette.ReviewText.main,
          }}
          onClick={() => {
            setOpenReviewProp(false);
          }}
        >
          <Close />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: 2,
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            component={"h2"}
            variant="h6"
            fontWeight={"bold"}
            color={Mytheme.palette.ReviewText.main}
          >
            {ReviewFormDetails.title}
          </Typography>
          {ReviewFormDetails.ButtonsDetail.map((B) => {
            return (
              <Box
                key={B.subtitle}
                sx={{
                  color: "grey",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                }}
              >
                <B.icon fontSize="large" />
                <Typography variant="subtitle2">{B.subtitle}</Typography>
              </Box>
            );
          })}
          <Box component={"hr"} color={"grey"} />
          <Typography variant="caption" color={"grey"}>
            {ReviewFormDetails.Subtitle}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {SocialIcons.map((item, index) => (
              <IconButton
                key={index}
                sx={{
                  bgcolor: `${item.bgc}`,
                  color: "white",
                  mr: index == SocialIcons.length - 1 ? "0px" : 0.2,

                  "&:hover": {
                    bgcolor: `${item.bgc}`,
                  },
                }}
              >
                <item.icon fontSize="small" sx={{ color: "white" }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReviewComp;
