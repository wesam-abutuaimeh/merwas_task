import React from "react";
import { StyledSectionIntro } from "./style.js";

const SectionIntro = ({
  sectionHeader,
  description,
  headerFontFamily,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  margin,
  h1Color,
  pColor,
}) => (
  <StyledSectionIntro>
    <h1 style={{ color: h1Color, fontFamily: headerFontFamily }}>
      {sectionHeader}
    </h1>
    <p
      style={{
        color: pColor,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        maxWidth,
        margin,
      }}
    >
      {description}
    </p>
  </StyledSectionIntro>
);

export default SectionIntro;
