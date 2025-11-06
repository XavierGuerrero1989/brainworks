import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import Hero from "../components/home/Hero";
import ServicesGrid from "../components/home/ServicesGrid";
import Methodology from "../components/home/Methodology";
import ProjectsFeatured from "../components/home/ProjectsFeatured";
import TechStack from "../components/home/TechStack";
import Sectors from "../components/home/Sectors";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  useScrollToTop();
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Methodology />
      <ProjectsFeatured />
      <TechStack />
      <Sectors />
      <FinalCTA />
    </>
  );
}
