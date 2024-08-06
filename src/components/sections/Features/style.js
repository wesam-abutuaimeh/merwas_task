import styled from "styled-components";

export const StyledFeaturesDiv = styled.div`
  .container {
    margin: 96px auto 0;
  }

  .cards__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: 100px auto;
  }

  .card {
    background-image: ${(props) => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    width: 448px;
    height: 350px;
    border-radius: 25px 0 0 0;
    border-radius: 25px;
    color: #fff;
    position: relative;
    z-index: 2;
    font-family: Nobile, sans-serif;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 25px;
      background: linear-gradient(
        180deg,
        #3f485e 0%,
        rgba(217, 217, 217, 0) 100%
      );
      transform: rotate(-179.926deg);
      border-radius: 25px;

      z-index: 0;
    }

    div {
      padding-top: 160px;
      padding-left: 20px;
      position: relative;
      z-index: 3;
      h2 {
        font-size: 18px;
        font-weight: 700;
        line-height: 18px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-family: dmSans, sans-serif;
        width: 390px;
        margin-top: 10px;
        font-size: 18px;
        line-height: 30px;
      }

      a {
        font-family: dmSans, sans-serif;
        display: flex;
        align-items: center;
        gap: 7px;
        margin-top: 50px;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 18px;
      }
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 348px;
      height: 250px;
    }
  }
`;
