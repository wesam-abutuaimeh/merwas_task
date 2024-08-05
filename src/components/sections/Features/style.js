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
    margin: 120px auto;
  }

  .card {
    background-image: ${(props) => `url(${props.bgimage})`};
    background-size: cover;
    background-position: center;
    width: 448px;
    height: 350px;
    border-radius: 25px 0 0 0;
    border-radius: 25px;

    color: #fff;

    div {
      padding-top: 160px;
      padding-left: 20px;

      p {
        width: 390px;
        margin-top: 10px;

        font-size: 18px;
        line-height: 30px;
      }
      a {
        display: flex;
        align-items: center;
        gap: 7px;
        margin-top: 50px;
        color: #fff;
        font-family: dmSans;
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
