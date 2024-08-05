"use client";
import React from "react";
import { Container } from "@/styles/commen.js";
import SectionIntro from "@/components/organisms/SectionIntro";
import CustomImage from "@/components/atoms/CustomImage";
import aboutUSData from "@/mock/aboutUsData";
import { StyleAboutUs } from "./style.js";

function AboutUs() {
  return (
    <Container>
      <div>
        <SectionIntro
          sectionHeader="About Us"
          description="With lots of unique blocks, you can easily build a page easily without any coding."
          maxWidth="520px"
          margin="15px auto 0"
          pColor="#77838F"
        />

        <StyleAboutUs>
          <div className="container">
            <div className="hero__text">
              <h2>OurWebsite</h2>
              <h3>We offer more than just a workspace</h3>
            </div>

            <div className="cards__container">
              {aboutUSData.map((item) => (
                <div className="card" key={item.id} bgimage={item.img_src}>
                  <div>
                    <CustomImage
                      imgSrc={item.SVG}
                      width={40}
                      height={40}
                      title={item.title}
                    />
                  </div>
                  <div className="cards__data">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CustomImage
            imgSrc={"/images/aboutUs.png"}
            width={300}
            height={400}
            title={"About Us Section Image"}
          />
        </StyleAboutUs>
      </div>
    </Container>
  );
}

export default AboutUs;
