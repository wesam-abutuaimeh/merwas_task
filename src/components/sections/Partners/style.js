import styled from "styled-components";

export const StyledPartnersSection = styled.section`
  background: linear-gradient(
    151.81deg,
    #3f485e 24.5%,
    #49536b 53.53%,
    #535e78 82.55%
  );
  /* height: 850px; */
  padding-top: 80px;
`;

export const StyledPartnersCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 29px;
  padding-top: 100px;
  padding-bottom: 150px;

  .partner__card {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
    background-color: #fff;
    width: 485px;
    height: 360px;
    border-radius: 25px;
    position: relative;

    img {
      margin-top: 10px;
      object-fit: contain;
    }

    p {
      max-width: 250px;
      text-align: center;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 200px;
      height: 11px;
      background-color: #eb6b2a;
      opacity: 0.5;
      border-radius: 50px 50px 0 0;
    }
  }

  @media (max-width: 820px) {
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 20px;

    .partner__card {
      height: 250px;
      img {
        width: 100px;
        height: 100px;
      }
      &::after {
        width: 100px;
      }
    }
  }
`;
