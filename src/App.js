import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/about" element={<About />} />
        <Route to="/about" element={<About />} />
        <Route to="/services" element={<Services />} />
        <Route to="/portfolio" element={<Portfolio />} />
        <Route to="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
