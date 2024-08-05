"use client";
import React from "react";
import { StyledFooter, StyledSubFooter, StyledCopyRightYear } from "./style";
import SectionIntro from "@/components/organisms/SectionIntro";
import SocailNetworkingIcons from "@/components/organisms/SocailNetworkingIcons";
import SubscribeForm from "@/components/atoms/SubscribeForm";
import LanguageSelector from "@/components/atoms/LanguageSelector";
import { Container } from "@/styles/commen";

function Footer() {
  return (
    <StyledFooter>
      <SectionIntro
        sectionHeader="Subscribe our newsletter"
        description="Your download should start automatically, if not Click here. Should I give up, huh?."
        maxWidth="520px"
        margin="15px auto 0"
        h1Color={"#fff"}
        pColor="#fff"
        headerFontFamily={"Lora"}
        fontFamily={"Montserrat"}
        fontWeight={"400"}
        fontSize={"16px"}
      />

      <div style={{ marginTop: "34px", marginBottom: "10px" }}>
        <SubscribeForm />
      </div>

      <Container>
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <SocailNetworkingIcons />
        </div>

        <StyledSubFooter>
          <StyledCopyRightYear>
            Copyright © 2024OurWebsite . All Right Reserved.
          </StyledCopyRightYear>

          <LanguageSelector />
        </StyledSubFooter>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
