import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #3f485e;
  padding-top: 47px;
  position: absolute;
  /* top: 0;
  bottom: 0; */
  left: 0;
  right: 0;
`;

export const StyledSubFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fff;
  margin-top: 179px;
  padding: 40px 0 35px;

  @media (max-width: 970px) {
    margin-top: 130px;
    padding: 30px 0 25px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
`;

export const StyledCopyRightYear = styled.div`
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.85px;
  color: #ffffff;
`;
