import { Stack } from "@mui/material";
import React from "react";
import PS1 from "./PS1";
import PS2 from "./PS2";
import PS3 from "./PS3";
import PS4 from "./PS4";
import PS5 from "./PS5";
import PS6 from "./PS6";
import PS7 from "./PS7";
import PS8 from "./PS8";
import PS9 from "./PS9";
import PS10 from "./PS10";
import PS11 from "./PS11";
import SectionDesign from "../../CustomeComp/SectionDesign";
import { SectionDesignData } from "../../Const/PersonalConst";
const Personal = () => {
  return (
    <Stack sx={{ mt: "3.3rem" }}>
      <PS1 />
      <PS2 />
      <PS3 />
      <PS4 />
      <PS5 text={"Smart Business Card"} />
      <PS6 />
      <PS7 />
      <PS8 />
      <PS9 />
      <PS10 />
      <PS11 />
      <PS5 text={"How can I start ?"} />
      {SectionDesignData.map((S, I) => {
        return (
          <SectionDesign
            key={S.SectionTitle}
            Pic={S.Pic}
            Step={`Step${I + 1}`}
            SectionTitle={S.SectionTitle}
            SectionCaption={S.SectionCaption}
            imageView={S.imageView}
          />
        );
      })}
    </Stack>
  );
};

export default Personal;
