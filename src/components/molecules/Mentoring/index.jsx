"use client";
import React from "react";
import { Container } from "@/styles/commen.js";
import { StyledMentoring, StyledMentoringText, StyledImages } from "./style.js";
import ImagesContainer from "@/components/molecules/ImagesContainer";

const Mentoring = () => {
  return (
    <div>
      <Container>
        <StyledMentoring>
          <StyledMentoringText>
            <h3>Monitoring and Training</h3>
            <p>
              Grow with Expert Guidance. Our mentoring and training programs are
              your gateway to professional development. Gain insights and
              guidance from industry experts. Learn how to effectively apply
              your knowledge, navigate challenges, and expand your technological
              project.
            </p>
          </StyledMentoringText>

          <StyledImages>
            <ImagesContainer />
          </StyledImages>
        </StyledMentoring>
      </Container>
    </div>
  );
};

export default Mentoring;
