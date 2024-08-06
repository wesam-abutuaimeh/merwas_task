import React from "react";
import Image from "next/image";

function CustomImage({ imgSrc, width, height, title }) {
  return (
    <Image
      src={imgSrc}
      width={width}
      height={height}
      alt={title}
      objectFit="Contain"
    />
  );
}

export default CustomImage;
