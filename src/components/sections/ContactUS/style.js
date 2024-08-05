import styled from "styled-components";

export const StyledContactUs = styled.section`
  padding: 70px 0;

  .cta_word {
    font-family: Nobile, sans-serif;
    text-transform: capitalize;
    text-align: center;
    color: #3f485e;
    font-size: 40px;
    font-weight: 600;
    line-height: 57.8px;
    margin: 30px auto 100px;

    @media (max-width: 1120px) {
      font-size: 24px;
      margin: 10px 0 0 0;
    }
  }
`;

export const StyledContactDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;

  @media (max-width: 1120px) {
    flex-wrap: wrap;
  }
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .details {
    display: flex;
    img {
      margin-right: 15px;
    }
    font-family: Jost, sans-serif;
  }

  .second__column {
    margin-top: 95px;
  }

  .cta__form__Word {
    font-family: Jost, sans-serif;
    font-size: 35px;
    font-weight: 500;
    line-height: 50.58px;
    color: #3f485e;
    text-transform: capitalize;
    @media (max-width: 1120px) {
      font-size: 30px;
      text-align: center;
    }
  }

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    color: #3f485e;
    line-height: 26.01px;
  }

  p {
    color: #77838f;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .inputs__container {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .input__container {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      height: 60px;
      border-radius: 50px;
      border: 1px solid #e7e7ec;
      font-family: Jost, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px;
      padding-left: 20px;
      color: #77838f;
    }
  }

  label {
    font-family: Jost, sans-serif;
    font-size: 14px;
    color: #3f485e;
    line-height: 30px;
    text-transform: capitalize;
    margin-bottom: 7px;
  }

  textarea {
    width: 100%;
    height: 200px;
    border-radius: 25px;
    border: 1px solid #e7e7ec;
    padding: 20px;
    resize: none;
    margin-bottom: 30px;
  }
`;
