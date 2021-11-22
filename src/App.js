import React from "react";
import Caroussel from "./Main/Caroussel";
import Header from "./Main/Header";
import TopBar from "./Main/TopBar";
import Featured from "./Main/Featured";
import BackTop from "./Main/BackTop";
import AboutSection from "./Main/AboutSection";
import Location from "./Main/Location";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Caroussel />
      <Featured />
      <AboutSection />
      <Location />
      <BackTop />
    </>
  );
}

export default App;
