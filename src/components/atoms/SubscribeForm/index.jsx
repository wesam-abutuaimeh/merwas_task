import React from "react";
import { Input, Button, FormWrapper } from "./style";

const SubscribeForm = () => {
  return (
    <FormWrapper>
      <Input type="email" placeholder="Enter your email" />
      <Button type="submit">Subscribe</Button>
    </FormWrapper>
  );
};

export default SubscribeForm;
