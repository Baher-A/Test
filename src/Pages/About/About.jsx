import { Stack } from "@mui/material";
import React from "react";
import AUS1 from "./AUS1";
import AUS2 from "./AUS2";
import AUS3 from "./AUS3";
import FoOooOoter from "../FoOooOoter"
const About = () => {
  return (
    <Stack sx={{ mt: "1rem" }}>
      <AUS1 />
      <AUS2 />
      <AUS3 />
      <FoOooOoter/>
    </Stack>
  );
};

export default About;
