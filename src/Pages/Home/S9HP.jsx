import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import ImageSlider from "../../CustomeComp/ImageSlider"
const S9HP = () => {
  const theme =  useTheme()

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      my: { xs: 10, md: 15 }
    }}
  >
    <Box
      display={"flex"}
      flexDirection={"column"}
      textAlign={"center"}
      width={"100%"}
      gap={2}
    >
      <Typography variant="h6" color={theme.palette.primary}>
        Meet Our Top Customers
      </Typography>
      <Typography variant="h2">Top Profiles</Typography>
      <Typography variant="caption">
        Join us now and share with us your success in your field
      </Typography>
    </Box>
    <ImageSlider />
  </Box>
  )
}

export default S9HP