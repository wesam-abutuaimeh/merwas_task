import React from "react";
import CustomImage from "@/components/atoms/CustomImage";
import { StyledImage } from "./style";

const ImageContainer = () => {
  return (
    <StyledImage>
      <CustomImage
        imgSrc={"/images/services/services3.png"}
        width={250}
        height={300}
        title={"services"}
      />
      <CustomImage
        imgSrc={"/images/services/services1.png"}
        width={250}
        height={300}
        title={"services"}
      />
      <CustomImage
        imgSrc={"/images/services/services2.png"}
        width={250}
        height={300}
        title={"services"}
      />
    </StyledImage>
  );
};

export default ImageContainer;
