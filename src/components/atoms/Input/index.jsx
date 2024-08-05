import React from "react";

const Input = ({
  type = "text",
  value,
  placeholder,
  name,
  id,
  required,
  className,
  style,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      id={id}
      required={required}
      className={className}
      style={style}
    />
  );
};

export default Input;
