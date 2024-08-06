import React from "react";
import { Container } from "@/styles/commen";
import {
  StyledServiceSection,
  StyledService,
  StyledImage,
  StyledText,
} from "./style.js";
import ImagesContainer from "@/components/molecules/ImagesContainer";

const ServiceSection = ({ reverse, head, headColor, pargraph }) => {
  return (
    <StyledServiceSection reverse={reverse}>
      <Container>
        <StyledService>
          <StyledImage>
            <ImagesContainer />
          </StyledImage>
          <StyledText headColor={headColor}>
            <h3>{head}</h3>
            <p>{pargraph}</p>
          </StyledText>
        </StyledService>
      </Container>
    </StyledServiceSection>
  );
};

export default ServiceSection;
