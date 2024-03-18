import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { listtext } from "../../Const/About";
import MainImage from "../../assets/AboutImages/MainImage.jpg";

const AUS1 = () => {
  return (
    <Container component={"div"}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            component={"img"}
            src={MainImage}
            alt="MainImage"
            style={{ width: "100%", height: "100%" }}
            className="II"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: "#29E6FF" }}
            >
              We believe that we create the future with you.
            </Typography>
            <Typography variant="h4">About Linky</Typography>
            <List sx={{ padding: 0 }}>
              {listtext.map((item, index) => {
                return (
                  <ListItem key={index} sx={{ padding: 0 }}>
                    <ListItemText primary={item} />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AUS1;
