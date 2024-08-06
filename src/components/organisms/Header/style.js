import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3f485e;
  height: 102px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  width: auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    img {
      width: 100px;
      height: 40px;
      object-fit: contain;
    }
    flex-direction: column;
    height: auto;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
  li {
    margin-left: 30px;
    @media (max-width: 768px) {
      margin: 10px 0;
    }
    a {
      font-family: Montserrat;
      font-size: 15px;
      line-height: 18.29px;
      text-transform: uppercase;
      color: #ffffff;
      &.active {
        color: #eb6b2a;
        animation: ${fadeIn} 300ms ease-in;
      }
    }
  }
`;

export const LoginBtns = styled.div`
  gap: 10px;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    text-align: center;
  }
`;
