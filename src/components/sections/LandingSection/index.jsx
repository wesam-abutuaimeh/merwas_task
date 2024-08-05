"use client";
import React from "react";
import { Container } from "@/styles/commen.js";
import { StyledLandingSection } from "./style.js";

const LandingSection = () => {
  return (
    <StyledLandingSection>
      <Container>
        <div className="intro">
          <h1>
            Welcome to The <span>OurWebsite</span>, Your Platform for Launching
            Towards Technological Success!
          </h1>
        </div>
      </Container>
    </StyledLandingSection>
  );
};

export default LandingSection;
