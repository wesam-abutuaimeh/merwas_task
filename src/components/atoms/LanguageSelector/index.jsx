"use client";
import React, { useState } from "react";
import { StyledSelectDiv, StyledSelectInput } from "./style.js";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
  };

  return (
    <StyledSelectDiv>
      <StyledSelectInput value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </StyledSelectInput>
    </StyledSelectDiv>
  );
};

export default LanguageSelector;
