"use client";
import React from "react";
import SectionIntro from "@/components/organisms/SectionIntro";
import ServiceSection from "@/components/sections/Services/ServiceSection";
import Mentoring from "@/components/molecules/Mentoring";

function Services() {
  return (
    <div>
      <SectionIntro
        sectionHeader="Services"
        description="With lots of unique blocks, you can easily build a page easily without any coding."
        maxWidth="520px"
        margin="15px auto 0"
        pColor="#77838F"
      />

      <ServiceSection
        headColor="#eb6b2a"
        head={"Coworking spaces"}
        pargraph={
          "Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivitys"
        }
      />

      <Mentoring />

      <ServiceSection
        reverse={true}
        head={"mentoring and training"}
        pargraph={
          "Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project"
        }
      />

      <Mentoring />
    </div>
  );
}

export default Services;
