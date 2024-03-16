import { useTheme } from '@emotion/react';
import { ShoppingCart } from '@mui/icons-material';
import { ButtonBase, Typography, styled } from '@mui/material';
import React from 'react'
const ButtonStyle1 = styled(ButtonBase)({
    boxShadow: "none",
    textTransform: "uppercase",
    padding: "6px 16px",
    lineHeight: 1.5,
    backgroundColor: "#000",
    width: "fit-Content",
    fontSize: "85%",
    fontWeight: "900",
    // marginTop: "1rem",
    transition: "all .2s ease",
    position: "relative",
    overflow: "hidden",
    color: "white",
    borderRadius: "5px",
    "&::before": {
      content: "''",
      backgroundColor: "purple",
      height: "1em",
      width: "1em",
      transition: "all .2s ease .1s",
      position: "absolute",
      // borderRadius: "8px",
      left: -16,
    },
    "&:hover": {
      color: "black",
      "&::before": {
        width: "100%",
        left: 0,
        backgroundColor: "rgba(255, 255, 255,.9)",
        // zIndex: -1,
        height: "1.5em",
        
      },
    },
  });
const PrimaryBtn = ({ content, BTNICON, ...props }) => {
    const theme = useTheme()

  return (
    
    <ButtonStyle1 {...props}>
    <Typography
          sx={{ zIndex: 2, fontWeight: "900", display: "flex" }}
        >
        {content}
        {BTNICON}

        </Typography>
</ButtonStyle1>
  )
}

export default PrimaryBtn