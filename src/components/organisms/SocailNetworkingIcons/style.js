import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  height: 53px;
  justify-content: end;
`;

export const StyledIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  top: 9px;

  &:hover {
    border: 1px solid #e7e7ec;
    box-shadow: 0 15px 0 #8c98a41a;
  }
`;
