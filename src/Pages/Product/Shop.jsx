import React, { useState } from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  List,
  Pagination,
  Rating,
  Slider,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ProductInformation,
  TopRatedProduct,
  marks,
} from "../../Const/ProductConst";
import { Close } from "@mui/icons-material";
import ShowProducts from "./ShowProducts";
import QuickView from "./QuickView.jsx";
import { ScrolToOoTop } from "../../Const/ProductConst";


const Shop = () => {
  const navigate = useNavigate();
  const Mytheme = useTheme();
  const [Slidervalue, setSlidervalue] = useState([250, 400]);
  const [Instock, setInstock] = useState(false);
  const [Onsale, setOnsale] = useState(false);
  const [Page, setPage] = React.useState(1);
  const [ProductsContainer, setProductsContainer] =
    useState(ProductInformation);
  const [SnachADDTOCART, setSnachADDTOCART] = useState(false);

  const CoountValue = Math.round(ProductsContainer.length / 9);
  const HandlePaginationChange = (e, v) => {
    setPage(v);
  };
  const StepDistance = 50;
  const LogicHandel = (ONSALE, INSTOCK) => {
    ONSALE == "true" && INSTOCK == "true"
      ? (setProductsContainer(ProductInformation),
        setProductsContainer(ProductsContainer.filter((p) => p.onsale != 0)),
        ProductsContainer.filter((i) => i.instock === "yes"))
      : ONSALE == "false" && INSTOCK == "true"
      ? (setProductsContainer(ProductInformation),
        setProductsContainer(
          ProductsContainer.filter((p) => p.instock == "yes")
        ))
      : ONSALE == "true" && INSTOCK == "false"
      ? (setProductsContainer(ProductInformation),
        setProductsContainer(ProductsContainer.filter((i) => i.onsale != 0)))
      : setProductsContainer(ProductInformation);
  };
  const handlechangonsale = (event, value) => {
    setOnsale(value);
    LogicHandel(`${value}`, `${Instock}`);
  };
  const handlechanginstock = (event, value) => {
    setInstock(value);
    LogicHandel(`${Onsale}`, `${value}`);
  };
  const handleChange = (event, newValue) => {
    setSlidervalue(newValue);
  };
  const [QuickViewButton, setQuickViewButton] = useState(false);
  const [QuickViewOBject, setQuickViewOBject] = useState();
  return (
    <Container>
      {QuickViewOBject == undefined ? null : (
        <Backdrop sx={{ zIndex: 5 }} open={QuickViewButton}>
          <Stack
            className={
              QuickViewButton == false
                ? "ReviewformonClose"
                : "ReviewformonOpen"
            }
            sx={{
              position: "relative",
              mx: "auto",
              // padding:'10px',
              width: "50%",
              // height: "fit-content",
              bgcolor: Mytheme.palette.mode == "dark" ? "#1e1e1e" : "#dbdbdb",
              borderRadius: "1rem",
            }}
          >
            <QuickView Product={QuickViewOBject} OptionalPart={false} />
            <IconButton
              sx={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={() => {
                setQuickViewButton(false);
              }}
            >
              <Close sx={{ color: Mytheme.palette.text.primary }} />
            </IconButton>
          </Stack>
          {/* {console.log(QuickViewOBject)} */}
        </Backdrop>
      )}
      <Snackbar
        name="ADDTOCARt"
        open={SnachADDTOCART}
        autoHideDuration={5000}
        message={`Done Sir`}
        onClose={() => {
          setSnachADDTOCART(false);
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "100%", fontWeight: "bold", borderRadius: "10px" }}
        >
          This is a success Add to your Cart
        </Alert>
      </Snackbar>
      <Grid container spacing={6}>
        {/* Drawer Section Of Shop Page */}
        <Grid
          item
          xs={3}
          sx={{ display: { md: "flex", xs: "none" }, flexDirection: "column" }}
        >
          <Box sx={{ padding: "10px", borderBottom: "1px solid grey" }}>
            <Typography variant="h7">FILTER BY PRICE</Typography>
            <Slider
              sx={{ color: "#ff0084" }}
              size="small"
              defaultValue={30}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={150}
              max={500}
              step={StepDistance}
              value={Slidervalue}
              marks={marks}
            />
            <Box
              sx={{
                display: "flex",
                mt: 1,
                justifyContent: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                <u style={{ color: "grey", textDecoration: "none" }}>
                  Price :{" "}
                </u>
                {Math.min(Slidervalue[0], Slidervalue[1])} EGP _
                {Math.max(Slidervalue[0], Slidervalue[1])}EGP
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  width: "50%",
                  alignSelf: "center",
                  padding: "5px 10px",
                }}
                onClick={() => {
                  setProductsContainer(
                    ProductInformation.filter(
                      (obj) =>
                        obj.ProductFinalPrice <=
                          Math.max(Slidervalue[0], Slidervalue[1]) &&
                        obj.ProductFinalPrice >=
                          Math.min(Slidervalue[0], Slidervalue[1])
                    )
                  );
                }}
              >
                Filter
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid grey",
              padding: "10px",
            }}
          >
            <Typography variant="h7">STOCK STATUS</Typography>

            <FormControlLabel
              label="On sale"
              control={
                <Checkbox
                  color="primary"
                  checked={Onsale}
                  onChange={handlechangonsale}
                />
              }
            />
            <FormControlLabel
              label="In stock"
              control={
                <Checkbox
                  color="primary"
                  checked={Instock}
                  onChange={handlechanginstock}
                />
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography variant="h7" fontWeight={"bold"}>
              TOP RATED PRODUCTS
            </Typography>
            <List>
              {TopRatedProduct.map((product, index) => {
                return (
                  <Link
                    key={product.name}
                    sx={{ textDecoration: "none" }}
                    onClick={() => {
                      navigate(`${product.name}`);
                      ScrolToOoTop()
                    }}
                  >
                    <Card
                      elevation={24}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: index > 0 ? 2 : 0,
                        padding: "5px",
                        width: "100%",
                        height: "100px",
                        borderRadius: "15px",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Box
                        component={"img"}
                        src={product.imagee}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: { lg: "100px", md: "70px", xs: "65px" },
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          ml: 2,
                        }}
                      >
                        <Typography variant="subtitle2" fontWeight={"bold"}>
                          {product.name.replace(/-/g, " ")}
                        </Typography>
                        <Rating
                          size="small"
                          value={product.RatingValue}
                          readOnly
                          name={product.name}
                        />
                        <Typography variant="subtitle1" color={"#29E6FF"}>
                          {product.price} EGP
                        </Typography>
                      </Box>
                    </Card>
                  </Link>
                );
              })}
            </List>
          </Box>
        </Grid>
        {/* Products Section 'll Display in this Grid System  */}

        <Grid item xs={12} md={9}>
          <Grid container spacing={1}>
            <ShowProducts
              PRODUCTS={ProductsContainer.slice(
                (Page - 1) * 12,
                (Page - 1) * 12 + 12
              )}
              PageNumber={Page}
              setQuickViewButton={setQuickViewButton}
              setQuickViewOBject={setQuickViewOBject}
              setSnachADDTOCART={setSnachADDTOCART}
              SnachADDTOCART={SnachADDTOCART}
            />

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "relative",
                my: 8,
              }}
            >
              <Pagination
                count={CoountValue}
                variant="outlined"
                shape="rounded"
                onChange={HandlePaginationChange}
                page={Page}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
