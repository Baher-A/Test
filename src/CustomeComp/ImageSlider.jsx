import React from "react";
import { Box, Stack } from "@mui/material";
import { ImagesSlider } from ".././Const/HomeConst";

const ImageSlider = () => {
  return (
    <Stack className="Scrooler">
      <Box className="Inner__scrooler">
        {ImagesSlider.map((img, index) => (
          <Box
            className="imagecontainer"
            key={index}
            sx={{ width: { xl: "260px", md: "200px", xs: "180px" } }}
          >
            <img src={img} alt={`SilderImg${index + 1}`} className="Imageees" />
          </Box>
        ))}
        {ImagesSlider.map((img, index) => (
          <Box
            className="imagecontainer"
            key={index}
            sx={{ width: { xl: "260px", md: "200px", xs: "180px" } }}
          >
            <img src={img} alt={`SilderImg${index + 1}`} className="Imageees" />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default ImageSlider;
