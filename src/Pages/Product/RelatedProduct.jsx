import React from "react";
import {
  Box,
  Rating,
  ToggleButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { AddShoppingCart, Favorite, Search } from "@mui/icons-material";
import ProductDesign from "./ProductDesign";
import { ScrolToOoTop } from "../../Const/ProductConst";
const RelatedProduct = ({
  SliderProducts,
  Slideperview,
  setRerender,
  Rerender,
}) => {
  const navigate = useNavigate();
  const Mytheme = useTheme();
  return (
    <>
      <Swiper
        navigation
        pagination
        fadeEffect={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ width: "100%", marginBottom: "4rem" }}
      >
        {SliderProducts.map((icon, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                  "&:hover .Pricce": {
                    opacity: 0,
                    position: "absolute",
                    transform: "translateY(40px)",
                    top: 0,
                    left: icon.ProductPriceBefore == 0 ? "42%" : "33%",
                  },
                  "&:hover .Ratting": {
                    position: "relative",
                    transition: "all 300ms ease-in-out",
                    transform: "translateY(0px)",
                    opacity: 1,
                  },
                  "&:hover .ProductOptions": {
                    opacity: 1,
                    transform: "translateX(0px)",
                  },
                }}
              >
                <Box
                  className="ProductOptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    opacity: 0,
                    position: "absolute",
                    right: "50px",
                    top: "100px",
                    transition: "all 300ms ease-in-out",
                    transform: "translateX(40px)",
                    zIndex: 2,
                    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.6)",
                    bgcolor:
                      Mytheme.palette.mode == "dark"
                        ? "rgba(1, 1, 1, 0.5)"
                        : "rgba(10, 10, 10, 0.4)",
                    borderRadius: "25px",
                    padding: "5px",
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
                    <Tooltip title={"Add To wish List"} placement="left" arrow>
                      <Favorite
                        fontSize="medium"
                        sx={{ color: "white", fontWeight: "bold" }}
                      />
                    </Tooltip>
                  </ToggleButton>
                  <ToggleButton
                    value="check"
                    sx={{ border: "none", borderRadius: "50%" }}
                  >
                    <Tooltip title={"Add To Cart"} placement="left" arrow>
                      <AddShoppingCart
                        fontSize="medium"
                        sx={{ color: "white", fontWeight: "bold" }}
                      />
                    </Tooltip>
                  </ToggleButton>
                  <ToggleButton
                    value="check"
                    sx={{ border: "none", borderRadius: "50%" }}
                  >
                    <Tooltip title={"QuickView"} placement="left" arrow>
                      <Search
                        fontSize="medium"
                        sx={{ color: "white", fontWeight: "bold" }}
                      />
                    </Tooltip>
                  </ToggleButton>
                </Box>

                <Link
                  to={`/Products/${icon.ProductName}`}
                  onClick={<ProductDesign />}
                >
                  <Box
                    component={"img"}
                    src={icon.imaag}
                    alt={icon.ProductName}
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  />
                </Link>

                <Link
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                    color: `${Mytheme.palette.text.primary}`,
                  }}
                  to={`/Products/${icon.ProductName}`}
                  onClick={<ProductDesign />}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {icon.ProductName.replace(/-/g, " ")}
                  </Typography>
                </Link>

                <Typography
                  variant="subtitle2"
                  textAlign={"center"}
                  color={"grey"}
                >
                  {icon.ProductSubTitle}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    ml: 2,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={"bold"}>
                    {icon.name}
                  </Typography>

                  <Box
                    className={icon.RatingValue == 0 ? "" : "Pricce"}
                    sx={{
                      display: "flex",
                      gap: 1,
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 0,
                      opacity: 1,
                      transform: "translateY(0px)",
                      transition: "all 800ms ease",
                    }}
                  >
                    <Typography
                      textAlign={"center"}
                      variant="subtitle1"
                      sx={{
                        textDecoration: "line-through",
                        color: "grey",
                        display:
                          icon.ProductPriceBefore == 0 ? "none" : "inline",
                      }}
                    >
                      {icon.ProductPriceBefore} EGP
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color={"#29E6FF"}
                      textAlign={"center"}
                    >
                      {icon.ProductFinalPrice} EGP
                    </Typography>
                  </Box>
                  {icon.RatingValue == 0 ? (
                    ""
                  ) : (
                    <Rating
                      className="Ratting"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        opacity: 0,
                        transform: "translateY(-40px)",
                        left: "35%",
                      }}
                      size="small"
                      value={icon.RatingValue}
                      readOnly
                      name={icon.name}
                    />
                  )}
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default RelatedProduct;
