import React from "react";

import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Rating,
  ToggleButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { Favorite, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const ShowProducts = ({
  PRODUCTS,
  PageNumber,
  setQuickViewButton,
  setQuickViewOBject,
  setSnachADDTOCART,
}) => {
  const Mytheme = useTheme();
  const navigate = useNavigate();
  return PRODUCTS.map((PRODUCT, INDEX) => {
    return (
      <Grid
        item
        xs={6}
        md={4}
        key={`${PRODUCT.ProductName} ${INDEX}`}
        sx={{
          position: "relative",
          transition: "all 200ms ease-in-out",
          padding: "10px",
          borderRadius: "30px",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          },
          "&:hover .cardView": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "&:hover .MainCard": {
            boxShadow: "none",
          },
          "&:hover .Pricebox": {
            opacity: "0",
            transform: "translateY(20%)",
            position: "absolute",
          },
          "&:hover .ProductRating": {
            display: "flex",
            transform: "translateX(0px)",
            opacity: "1",
            position: "relative",
          },
        }}
      >
        <Box
          className="MainCard"
          sx={{
            borderRadius: "30px",
            width: "100%",
            height: "90%",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
            gap: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Link
            onClick={() => {
              navigate(`/products/${PRODUCT.ProductName}`);
              ScrollToTopPAge();
              // return <ProductDesign />;
            }}
          >
            <Box
              component={"img"}
              src={PRODUCT.imaag}
              sx={{
                width: "100%",
                top: 0,
                objectFit: "cover",
                justifyContent: "center",
                flexDirection: "column",
                display: "flex",
                objectPosition: "center",
                borderRadius: "15px",
                zIndex: "-1",
                transition: "all 400ms ease-in-out",
              }}
            />
          </Link>

          {PRODUCT.onsale != 0 ? (
            <Box sx={{ position: "absolute", top: 20, left: 15 }}>
              <Paper
                elevation={24}
                sx={{
                  position: "relative",
                  padding: "14px 11px",
                  borderRadius: "50%",
                  bgcolor: "rgba(41, 230, 255,.5)",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold" }}
                  color={Mytheme.palette.text.primary}
                >
                  -{PRODUCT.onsale}%
                </Typography>
              </Paper>
            </Box>
          ) : null}

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link
              sx={{
                textDecoration: "none",
                color: Mytheme.palette.text.primary,
              }}
              onClick={() => {
                navigate(`/products/${PRODUCT.ProductName}`);
                ScrollToTopPAge();
                // return <ProductDesign />;
              }}
            >
              <Typography
                variant="body1"
                textAlign={"center"}
                fontWeight={"bold"}
              >
                {PRODUCT.ProductName.replace(/-/g, " ")}
              </Typography>
            </Link>

            <Typography
              variant="body1"
              sx={{ color: "grey", textAlign: "center" }}
            >
              {PRODUCT.ProductSubTitle}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              opacity: "1",
              position: "relative",
              transform: "translateY(0%)",
            }}
          >
            <Typography
              className={
                (PRODUCT.RatingValue == 5) | (PRODUCT.RatingValue == 4)
                  ? "Pricebox"
                  : null
              }
              component={"span"}
              sx={{
                textDecoration: "line-through",
                position: "relative",
                color: "grey",
                display: PRODUCT.ProductPriceBefore == 0 ? "none" : "inline",
                fontWeight: "bold",
              }}
            >
              {`${PRODUCT.ProductPriceBefore} EGP`}
            </Typography>
            <Typography
              className={
                (PRODUCT.RatingValue == 5) | (PRODUCT.RatingValue == 4)
                  ? "Pricebox"
                  : null
              }
              variant="body1"
              sx={{
                color: "#29E6FF",
                textAlign: "center",
                fontWeight: "bold",
                position: "relative",
              }}
            >
              {`     ${PRODUCT.ProductFinalPrice} EGP`}
            </Typography>
            {(PRODUCT.RatingValue == 5) | (PRODUCT.RatingValue == 4) ? (
              <Rating
                className="ProductRating"
                sx={{
                  display: "flex",
                  position: "absolute",
                  opacity: "0",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "translateX(-80px)",
                  transition: "all .5s ease-in-out",
                  zIndex: 2,
                  bottom: 0,
                }}
                size="small"
                value={PRODUCT.RatingValue}
                readOnly
                name={PRODUCT.ProductName}
              />
            ) : null}
          </Box>
        </Box>

        <Box
          className="cardView"
          sx={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            transform: "translateY(20px)",
            transition: "all 200ms ease",
            opacity: 0,
            padding: "8px",
          }}
        >
          <ToggleButton
            value="check"
            onClick={(e) => {
              e.target.style.color == "red"
                ? (e.target.style.color = "inherit")
                : (e.target.style.color = "red");
            }}
            sx={{ border: "none", borderRadius: "50%" }}
          >
            <Tooltip title={"Add To wish List"} placement="top" arrow>
              <Favorite fontSize="medium" />
            </Tooltip>
          </ToggleButton>

          {/* **************************************************************************************** */}

          <Button
            variant="contained"
            onClick={() => {
              setSnachADDTOCART(true);
            }}
            sx={{
              paddingX: { md: "10px" },
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </Button>
          {/* **************************************************************************************** */}
          <ToggleButton
            value="check"
            onClick={() => {
              setQuickViewButton(true);
              setQuickViewOBject(PRODUCT);
            }}
            sx={{ border: "none", borderRadius: "50%" }}
          >
            <Tooltip title="Quick View" placement="top" arrow>
              <Search />
            </Tooltip>
          </ToggleButton>
        </Box>
      </Grid>
    );
  });
};

export default ShowProducts;
