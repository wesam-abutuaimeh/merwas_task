import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 50px;
  padding: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  outline: none;
  background-color: transparent;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;

  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  background-color: #8a8a8a;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  color: white;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: #666;
  }
`;
export { FormWrapper, Input, Button };
