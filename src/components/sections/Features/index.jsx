"use client";
import React from "react";
import SectionIntro from "@/components/organisms/SectionIntro";
import { Container } from "@/styles/commen";
import { StyledFeaturesDiv } from "./style";
import { CARDS } from "@/mock/cards";

const Features = () => {
  return (
    <StyledFeaturesDiv>
      <Container className="container">
        <SectionIntro
          description="At The OurWebsite, we are dedicated to helping you excel in the world of technology. Our services are specifically designed to meet your needs"
          fontFamily="nobile"
          fontSize="24px"
          fontWeight="500"
          lineHeight="76px"
          pColor="#77838F"
        />

        <div className="cards__container">
          {CARDS.map((card) => (
            <StyledFeaturesDiv key={card.id} bgimage={card.img_src}>
              <div className="card">
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <a href={"#"}>
                    Learn More
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4498 3.30225L17.5006 10.353L10.4498 17.4037"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5005 10.353L2.50055 10.353"
                        stroke="white"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </StyledFeaturesDiv>
          ))}
        </div>
      </Container>
    </StyledFeaturesDiv>
  );
};

export default Features;
