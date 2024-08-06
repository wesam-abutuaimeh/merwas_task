import React from "react";
import CustomImage from "@/components/atoms/CustomImage";
import { StyledImage } from "./style";

const ImagesContainer = () => {
  return (
    <StyledImage>
      <CustomImage
        imgSrc={"/images/services/services3.png"}
        width={200}
        height={250}
        title={"services"}
      />
      <CustomImage
        imgSrc={"/images/services/services1.png"}
        width={200}
        height={250}
        title={"services"}
      />
      <CustomImage
        imgSrc={"/images/services/services2.png"}
        width={200}
        height={250}
        title={"services"}
      />
    </StyledImage>
  );
};

export default ImagesContainer;
