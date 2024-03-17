import React from "react";
import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";
let pro = 0;
const SeconadaryButton = styled(ButtonBase)({
  textTransform: "uppercase",
  fontWeight: "900",
  fontSize: "85% !important",
  width: "fit-Content",
  lineHeight: 1.5,
  padding: "10px 16px ",
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  transition: ".2s linear .1s",
  outline: "2px solid #DDD",
  borderRadius: "5px",

  outlineOffset: "-2px",
  "&:-moz-focusring": {
    outline: "auto",
  },
  "&:hover": {
    outlineColor: "transparent",
    backgroundColor: "purple",
    transition: ".4s linear 1.6s",
    color: "#FFF",
  },
  "&:hover .OutLineTop": {
    pro: `${(pro = "100%")}%`,
    opacity: 1,
    transition: "transform(translateX(0)) .4s linear",
  },
});
const SecondaryBtn = ({ content, ...props }) => {
  return (
    <SeconadaryButton className="CustomizableButoon" {...props}>
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
      {content}
    </SeconadaryButton>
  );
};

export default SecondaryBtn;
