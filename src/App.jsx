import React, { useState, useEffect } from "react";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import {Testimonials} from "./components/testimonials";
import {Header} from "./components/header";
import Register from "./components/register";
import { Navigation } from "./components/navigation";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/summarizing" element={<Header  data={landingPageData.Testimonials} />} />
          <Route exact path="/support" element={<Testimonials  data={landingPageData.Testimonials} />} />
        </Routes>
      </Router>
      
  );
};

export default App;
