import styled from "styled-components";

export const StyleAboutUs = styled.div`
  display: flex;
  margin: 100px auto;

  .hero__text {
    font-family: Nobile;
    line-height: 40.59px;
    margin: 0 auto 40px 55px;

    h2 {
      font-size: 36px;
      color: #eb6b2a;
    }

    h3 {
      font-size: 36px;
      color: #3f485e;
      margin-top: 10px;
      text-transform: capitalize;
    }
  }

  .cards__container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    .card {
      display: flex;
      width: 390px;
      gap: 15px;
    }

    .cards__data {
      color: #3f485e;
    }

    h2 {
      font-size: 27px;
      line-height: 38.52px;
    }

    p {
      margin-top: 10px;
      font-size: 18px;
      line-height: 20.27px;
      letter-spacing: -0.03em;
    }
  }

  @media (max-width: 820px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .cards__container {
      gap: 20px;
      justify-content: center;
    }

    .cards__container .card {
      width: fit-content;
    }

    .hero__text {
      line-height: 30px;
      margin: 0 auto 35px 0;
      text-align: center;
    }
  }
`;
