import React from "react";
import "./style.css";

const Button = ({
  onClick,
  children,
  className,
  bgColor,
  color,
  width,
  height,
  padding,
  border,
  borderRadius,
  fontFamily,
  fontSize,
  fontWeight,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: bgColor,
        color: color,
        width: width,
        height: height,
        padding: padding,
        border,
        borderRadius: borderRadius,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
