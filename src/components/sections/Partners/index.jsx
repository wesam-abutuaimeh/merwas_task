"use client";
import React from "react";
import CustomImage from "@/components/atoms/CustomImage";
import { Container } from "@/styles/commen";
import SectionIntro from "@/components/organisms/SectionIntro";
import { PARTNERS_CARDS } from "@/mock/partnersData";
import { StyledPartnersSection, StyledPartnersCards } from "./style";

const Partners = () => (
  <StyledPartnersSection>
    <Container className="partners">
      <SectionIntro
        sectionHeader="Partners"
        description="With lots of unique blocks, you can easily build a page without any coding."
        maxWidth="520px"
        margin="15px auto 0"
        h1Color="#EB6B2A"
        pColor="#FFF"
      />

      <StyledPartnersCards>
        {PARTNERS_CARDS.map(({ id, img_src, title }) => (
          <div className="partner__card" key={id}>
            <CustomImage
              imgSrc={img_src}
              width={200}
              height={200}
              title={title}
            />
            <p>{title}</p>
          </div>
        ))}
      </StyledPartnersCards>
    </Container>
  </StyledPartnersSection>
);

export default Partners;
