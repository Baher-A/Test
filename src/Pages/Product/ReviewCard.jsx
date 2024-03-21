import React, { useState } from "react";
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
} from "@mui/material";
const ReviewCard = ({ Product }) => {
  const [product, setproduct] = useState(Product.ProductReview);

  return (
    <>
      <List>
        {product.map((item, index) => {
          return (
            <ListItem key={index}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                }}
              >
                <ListItemAvatar sx={{ mr: 1 }}>
                  <Avatar
                    src={""}
                    sx={{
                      objectFit: "cover",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.name}`}
                  secondary={`${item.review} `}
                ></ListItemText>
                <Rating readOnly value={Number(item.rating)} />
              </Card>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ReviewCard;
