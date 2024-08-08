"use client";
import React from "react";
import SectionIntro from "@/components/organisms/SectionIntro";
import { Container } from "@/styles/commen.js";
import {
  StyledContactUs,
  StyledContactDetails,
  StyledColumn,
  StyledForm,
} from "./style";
import CustomImage from "@/components/atoms/CustomImage";
import SocailNetworkingIcons from "@/components/organisms/SocailNetworkingIcons";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Map from "./GoogleMap";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledContactUs>
      <Container>
        <SectionIntro
          sectionHeader="contact us"
          description="With lots of unique blocks, you can easily build a page easily without any coding."
          maxWidth="520px"
          margin="15px auto 0"
          h1Color="#3F485E"
          pColor="#77838F"
        />

        <h4 className="cta_word">Get in touch today!</h4>

        <StyledContactDetails>
          <StyledColumn>
            <h4 className="cta__form__Word">Contact details</h4>
            <div className="details">
              <CustomImage
                imgSrc="/images/location.svg"
                width={25}
                height={25}
                title={"icon"}
              />

              <div>
                <h3>Find Us</h3>
                <p>2301 AMMAN . JORDAN</p>
              </div>
            </div>

            <div className="details">
              <CustomImage
                imgSrc="/images/alarm-clock (1).svg"
                width={25}
                height={25}
                title="icon"
              />
              <div>
                <h3>Working Hours</h3>
                <p>Mon-Fri: 8am - 5pm</p>
                <p>Sat-Sun: 8am - 2pm</p>
              </div>
            </div>
            <div className="details">
              <CustomImage
                imgSrc="/images/share (1) 1.svg"
                width={25}
                height={25}
                title="icon"
              />
              <div>
                <h3>Follow Us</h3>
                <SocailNetworkingIcons />
              </div>
            </div>
          </StyledColumn>

          <StyledColumn>
            <div className="details second__column">
              <CustomImage
                imgSrc="/images/phone.svg"
                width={25}
                height={25}
                title="icon"
              />
              <div>
                <h3>Phone</h3>
                <p>+ (06) 111-1111</p>
                <p>+ (06) 111-1111</p>
              </div>
            </div>
            <div className="details">
              <CustomImage
                imgSrc="/images/edit.svg"
                width={25}
                height={25}
                title="icon"
              />
              <div>
                <h3>Write to Us</h3>
                <p>info@ourwebsite.com</p>
                <p>courses@ourwebsite.com</p>
              </div>
            </div>
          </StyledColumn>

          <StyledColumn>
            <h4 className="cta__form__Word">Have a question?</h4>
            <StyledForm onSubmit={handleSubmit}>
              <div className="input__container">
                <label htmlFor="complain">Types</label>
                <Input
                  type="text"
                  placeholder="complain"
                  id="complain"
                  name="complain"
                  required
                />
              </div>

              <div className="inputs__container">
                <div className="input__container">
                  <label htmlFor="name">Name</label>
                  <Input
                    type="text"
                    placeholder="Ali"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="input__container">
                  <label htmlFor="email">Email</label>
                  <Input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="input__container">
                <label htmlFor="msg">Message</label>
                <textarea
                  className="dd"
                  id="msg"
                  name="msg"
                  placeholder="Content"
                  required
                />
              </div>

              <Button
                className="login__btn"
                bgColor="#3F485E"
                color="#fff"
                borderRadius="50px"
                width={"320px"}
                height={"60px"}
                fontFamily={"Jost, sans-serif"}
                fontSize="16px"
                fontWeight="500"
                type="submit"
              >
                SEND
              </Button>
            </StyledForm>
          </StyledColumn>
        </StyledContactDetails>

        <Map />
      </Container>
    </StyledContactUs>
  );
};

export default ContactUs;
