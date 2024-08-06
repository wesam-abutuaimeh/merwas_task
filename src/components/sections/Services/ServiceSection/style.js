import styled from "styled-components";

export const StyledServiceSection = styled.div`
  background-color: #3f485e;
  height: 540px;
  padding: 20px 0 30px;
  margin-top: 70px;
  transform: ${({ reverse }) =>
    reverse ? "translateX(0)" : "translateX(80px)"};
  width: ${({ reverse }) => (reverse ? "95%" : "100%")};
  border-bottom-left-radius: 117px;
  border-radius: ${({ reverse }) => (reverse ? "0 117px 0 0" : "0 0 0 117px")};

  @media (max-width: 768px) {
    width: 100%;
    transform: translateX(0);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: fit-content;
  }
`;

export const StyledService = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledImage = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledText = styled.div`
  flex: 2;

  h3 {
    color: ${({ headColor }) => headColor || "#eb6b2a"};
    line-height: 27px;
    font-size: 27px;
    font-family: "Nobile", sans-serif;
    font-weight: 500;
    text-transform: capitalize;
  }

  p {
    color: #fff;
    font-family: "Nobile", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 22px;
      line-height: 24px;
    }

    p {
      font-size: 18px;
      line-height: 1.4;
    }
  }
`;
