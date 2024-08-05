import styled from "styled-components";

export const StyledLandingSection = styled.div`
  background-image: url("/images/Surface.png");
  height: 100vh;
  background-size: cover;
  background-position: center;

  .intro {
    width: 746px;
    height: 237px;

    position: relative;
    top: 256px;
    left: calc(211px - 80px);

    @media (max-width: 768px) {
      width: 100%;
      top: 0;
      left: 0;
    }

    h1 {
      color: #ffffff;
      font-family: Nobile;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 76px;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 2rem;
      }
    }

    span {
      color: #eb6b2a;
    }
  }

  @media (max-width: 768px) {
    .intro {
      padding-top: 10vh;

      h1 {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 480px) {
    .intro {
      padding-top: 15vh;

      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
