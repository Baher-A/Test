import {
  Box,
  Button,
  Typography,
  Rating,
  Alert,
  Snackbar,
  TextField,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { ProductInformation, ScrolToOoTop } from "../../Const/ProductConst";
import React, { useState } from "react";
import RelatedProduct from "./RelatedProduct";
import ReviewCard from "./ReviewCard";
import QuickView from "./QuickView";
import FoOooOoter from "../FoOooOoter";

const ProductDesign = () => {
  const ProductID = useParams();
  const [Product, setProduct] = useState(
    ProductInformation.find((i) => i.ProductName == ProductID.name)
  );
  const [RelatedProducts, setRelatedProduct] = useState(
    ProductInformation.filter(
      (i) => Product.ProductSubTitle == i.ProductSubTitle
    ).filter((ele) => ele.ProductName != Product.ProductName)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setrating] = useState(1);
  const [review, setReview] = useState("");
  const [opensnackbar, setopensnackbar] = useState(false);
  const [SnachBarMessage, setSnachBarMessage] = useState("");
  const [Reviewss, setReviewss] = useState(Product);
  const [Rerender, setRerender] = useState(true);

  const handleClose = (e, reason) => {
    setopensnackbar(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name != "" && email != "" && review != "") {
      Reviewss.ProductReview.push({
        name: name,
        email: email,
        rating: rating,
        review: review,
      });
      setName("");
      setEmail("");
      setrating(1);
      setReview("");
      setProduct(Reviewss);
      // setProduct(Product)
    } else if (name == "") {
      setopensnackbar(true);
      setSnachBarMessage("Please Fill Name Field");
    } else if (email == "") {
      setopensnackbar(true);
      setSnachBarMessage("Please Fill Email Field");
    } else if (review == "") {
      setopensnackbar(true);
      setSnachBarMessage("Please Fill Review Field");
    }
  };
  const [AddToCartSnach, setAddToCartSnach] = useState(false);

  return (
    <Stack>
      {Product == undefined ? (
        <Box sx={{ color: "red" }}>
          {" "}
          Error:* Sry Sir Product not found Make Sure OF Product Name{" "}
        </Box>
      ) : (
        <Box>
          <QuickView
            Product={Product}
            OptionalPart={true}
            setAddToCartSnach={setAddToCartSnach}
          />
          <Box component={"hr"} sx={{ color: "grey", opacity: 0.5, my: 5 }} />
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              {/* <ReviewForm Product={Product} setProduct={setProduct} /> */}

              <Box
                component={"form"}
                onSubmit={handleSubmit}
                id="ReviewForm"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                  padding: "30px",
                }}
              >
                <Typography
                  component={"h2"}
                  variant="h4"
                  id="title1"
                  name="Review-Field"
                >
                  ADD A REVIEW
                </Typography>
                <Typography
                  component={"h2"}
                  variant="caption"
                  sx={{ color: "grey" }}
                  name="Review-Field"
                >
                  Your email address will not be published. Required fields are
                  marked{" "}
                  <u style={{ color: "red", textDecoration: "none" }}>*</u>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    width: "100%",
                    gap: 1,
                    alignItems: "center",
                  }}
                  id="Rate"
                >
                  <Typography>Your Rating :</Typography>
                  <Rating
                    name="Rating-Field"
                    value={rating}
                    size="small"
                    onChange={(e) => {
                      setrating(Number(e.target.value));
                    }}
                  />
                </Box>

                <TextField
                  label="Your review"
                  id="review"
                  multiline
                  rows={4}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
                <Snackbar
                  name="snachbar"
                  open={opensnackbar}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
                  <Alert
                    name="Alert"
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    {SnachBarMessage}
                  </Alert>
                </Snackbar>

                <TextField
                  name="EmailField"
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
                <Button
                  name="SubmitButton"
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: "8rem", fontWeight: "bold" }}
                >
                  SUBMIT
                </Button>
              </Box>
            </Box>

            <Box sx={{ width: { md: "50%", xs: "100%" } }}>
              <Box sx={{ padding: "30px" }}>
                <ReviewCard Product={Product} setProduct={setProduct} />
              </Box>
            </Box>
          </Box>
          <Box component={"hr"} sx={{ color: "grey", opacity: 0.5, mb: 5 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: { xs: "100%" },
              marginX: "auto",
              padding: "30px",
            }}
          >
            <Typography variant="h5" component={"h2"}>
              Related Products
            </Typography>
            <Box
              sx={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                marginX: "auto",
              }}
            >
              <RelatedProduct
                SliderProducts={RelatedProducts}
                  Slideperview={RelatedProducts.length / 2}
                  Rerender={Rerender}
                  setRerender={setRerender}
              />
            </Box>
          </Box>
          <FoOooOoter />
        </Box>
      )}
      <Snackbar
        name="ADDTOCARt"
        open={AddToCartSnach}
        autoHideDuration={5000}
        message={`Done Sir`}
        onClose={() => {
          setAddToCartSnach(false);
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: "10px",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          Done ... successful add to list Item
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ProductDesign;
