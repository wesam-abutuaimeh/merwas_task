"use client";
import React from "react";
import { MainHeader, HeaderContainer, NavList, LoginBtns } from "./style.js";
import CustomImage from "@/components/atoms/CustomImage/index.jsx";
import Button from "@/components/atoms/Button/index.jsx";
import { Container } from "@/styles/commen.js";
import SocailNetworkingIcons from "../SocailNetworkingIcons/index.jsx";

function Header() {
  return (
    <>
      <Container>
        <SocailNetworkingIcons />
      </Container>

      <MainHeader>
        <Container>
          <HeaderContainer>
            <CustomImage
              imgSrc="/images/logo.png"
              width={260.29}
              height={50}
              title="logo"
            />

            <NavList>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </NavList>

            <LoginBtns>
              <Button
                className="btn"
                width="127px"
                height="48px"
                bgColor="#fff"
                color="#173E62"
                borderRadius="30px"
                padding="0px 38px"
                fontFamily="alef"
              >
                Register
              </Button>
              <Button
                className="btn"
                width="115px"
                height="48px"
                bgColor="#173E62"
                color="#fff"
                border="1px solid #fff"
                borderRadius="30px"
                padding="0px 38px"
                fontFamily="alef"
              >
                Log In
              </Button>
            </LoginBtns>
          </HeaderContainer>
        </Container>
      </MainHeader>
    </>
  );
}

export default Header;
