import React, { useState } from "react";

import {
  Add,
  CompareArrows,
  Favorite,
  Remove,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  ToggleButton,
  Typography,
} from "@mui/material";
import { socialIcons as SocialIcons } from "../../Const/HomeConst";
const QuickView = ({ Product, OptionalPart, setAddToCartSnach }) => {
  const [CounterValue, setCounterValue] = useState(1);

  return (
    <Container
      sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Box
          component={"img"}
          src={Product.imaag}
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Typography component={"h2"} variant="h3" sx={{ padding: "10px 0px" }}>
          {Product.ProductName.replace(/-/g, " ")}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h5"
            sx={{
              textDecoration: "line-through",
              position: "relative",
              color: "grey",
              fontWeight: "bold",
              display: Product.ProductPriceBefore == "0" ? "none" : "inherit",
            }}
          >
            {`${Product.ProductPriceBefore} EGP`}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#29E6FF",
              textAlign: "center",
              fontWeight: "bold",
              position: "relative",
            }}
          >
            {`     ${Product.ProductFinalPrice} EGP`}
          </Typography>
        </Box>

        {OptionalPart != true ? null : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                width: "100%",
                my: 3,
              }}
            >
              <Box className="Counter">
                <ToggleButton
                  value={"minus"}
                  onClick={() => {
                    CounterValue == 1
                      ? CounterValue
                      : setCounterValue(CounterValue - 1);
                  }}
                >
                  <Remove />
                </ToggleButton>
                <ToggleButton value={"Counter"} sx={{ padding: "10px 18px" }}>
                  {CounterValue}
                </ToggleButton>
                <ToggleButton
                  value={"Add"}
                  onClick={() => {
                    setCounterValue(CounterValue + 1);
                  }}
                >
                  <Add />
                </ToggleButton>
              </Box>
              <Button
                variant="contained"
                sx={{ padding: "8px 12px", ml: 3, fontWeight: "bold" }}
                onClick={() => {
                  setAddToCartSnach(true);
                }}
              >
                Add To Cart
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                startIcon={<CompareArrows />}
                sx={{ padding: "10px", borderRadius: "15px" }}
                onClick={() => {
                  setAddToCartSnach(true);
                }}
              >
                Compare
              </Button>
              <Button
                startIcon={<Favorite />}
                sx={{ padding: "10px", borderRadius: "15px" }}
                onClick={() => {
                  setAddToCartSnach(true);
                }}
              >
                Add to wishlist
              </Button>
            </Box>
          </>
        )}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            bgcolor: "#90caf9",
            alignItems: "center",
            padding: "8px",
            my: 3,
            borderRadius: "15px",
          }}
        >
          <Visibility fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="caption" sx={{ mr: "5px", fontWeight: "bold" }}>
            {/* {SpectatorNumber} */}
            577
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            People watching this product now!
          </Typography>
        </Box>

        <Box>
          <Box className="Categories" sx={{ mt: 2 }}>
            <Typography variant="body2">
              Categories :
              <u style={{ color: "grey", textDecoration: "none" }}>
                {` ${Product.ProductSubTitle}`}
              </u>
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mt: 1,
            }}
          >
            <Typography variant="body1">Share :</Typography>
            {SocialIcons.map((item, index) => (
              <IconButton
                key={index}
                sx={{
                  // bgcolor: `${item.bgc}`,
                  mr: index == SocialIcons.length - 1 ? "0px" : 0.2,
                  "&:hover": {
                    bgcolor: `${item.bgc}`,

                    color: "white",
                  },
                  "&:hover .ico": {
                    color: "white",
                  },
                }}
              >
                <item.icon
                  className="ico"
                  fontSize="small"
                  sx={{ color: "grey" }}
                />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default QuickView;
