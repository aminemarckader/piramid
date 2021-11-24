import React from "react";
import Header from "./Main/Header";
import TopBar from "./Main/TopBar";
import AboutSection from "./Main/AboutSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route path="/about" element={<AboutSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
