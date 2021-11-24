import React from "react";
import AboutSection from "./AboutSection";
import BackTop from "./BackTop";
import Caroussel from "./Caroussel";
import Featured from "./Featured";
import Location from "./Location";

export default function Main() {
  return (
    <>
      <Caroussel />
      <Featured />
      <AboutSection />
      <Location />
      <BackTop />
    </>
  );
}
