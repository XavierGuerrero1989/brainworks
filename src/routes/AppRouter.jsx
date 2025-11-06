import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/proyectos" element={<Projects />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
