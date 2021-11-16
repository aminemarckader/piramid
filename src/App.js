import React from "react";
import Caroussel from "./Main/Caroussel";
import Header from "./Main/Header";
import TopBar from "./Main/TopBar";
import Featured from "./Main/Featured";
import BackTop from "./Main/BackTop";
import AboutSection from "./Main/AboutSection";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Caroussel />
      <Featured />
      <AboutSection />
      <BackTop />
    </>
  );
}

export default App;
