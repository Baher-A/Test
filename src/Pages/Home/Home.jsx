import { Stack } from "@mui/material";
import React from "react";
import S1HP from "./S1HP.jsx";
import S2HP from "./S2HP.jsx";
import S3HP from "./S3HP.jsx";
import S4HP from "./S4HP.jsx";
const Home = () => {
  return (
    <Stack>
      <S1HP />
      <S2HP />
      <S3HP />
      <S4HP />
    </Stack>
  );
};

export default Home;
