import styled from "styled-components";

export const StyledMentoring = styled.div`
  display: flex;
  height: 520px;
  margin: 130px 0;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const StyledMentoringText = styled.div`
  h3 {
    font-family: Nobile, sans-serif;
    font-size: 28px;
    color: #3f485e;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
    }
  }

  p {
    font-family: Nobile, sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    color: #163c67;
    margin-top: 30px;

    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export const StyledImages = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
