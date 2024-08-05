import styled from "styled-components";

export const StyledSelectDiv = styled.div`
  width: 140px;
  height: 40px;
  padding: 0 20px;
  background-color: #525a6e;
  border-radius: 4px;
`;

export const StyledSelectInput = styled.select`
  border-radius: 4px 0px 0px 0px;
  background-color: #525a6e;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.85px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  background: url("/images/up-arrow.svg");
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: right center;

  option {
    background-color: #525a6e;
    padding: 0;
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.85px;
  }
`;
