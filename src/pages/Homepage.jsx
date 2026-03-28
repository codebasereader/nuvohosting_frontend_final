import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import GetApp from "../sections/GetApp";
import About from "../sections/About";
import Founders from "../sections/Founders";
import WhatCWDFyou from "../sections/WhatCWDFyou";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Founders />
        <WhatCWDFyou />
        <GetApp />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
