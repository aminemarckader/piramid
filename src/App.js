import React from "react";
import Caroussel from "./Main/Caroussel";
import Header from "./Main/Header";
import TopBar from "./Main/TopBar";
import Featured from "./Main/Featured";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Caroussel />
      <Featured />
    </>
  );
}

export default App;
