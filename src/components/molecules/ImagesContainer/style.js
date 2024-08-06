import styled from "styled-components";

export const StyledImage = styled.div`
  width: 540px;
  position: relative;
  display: flex;
  gap: 20px;

  img {
    &:first-child {
      z-index: 3;
    }

    &:last-child {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-90%, 70%);
      z-index: 2;
    }
  }
`;
