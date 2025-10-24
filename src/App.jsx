import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutEvent from "./components/AboutEvent";
import Agenda from "./components/Agenda";
import Schedule from "./components/Schedule";
import CommunityPartners from "./components/CommunityPartners";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className=""></div>
      {/* <Navbar />
      <LandingPage />
      <AboutEvent />
      <Agenda />
      <Speakers />
      <Schedule />
      <CommunityPartners /> */}
      <Router>
        <ScrollToTop /> {/* 👈 Add this here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutEvent />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/communitypartners" element={<CommunityPartners />} />
        </Routes>
        <AboutEvent />
        <Agenda />
        <Speakers />
        <CommunityPartners />
        <Footer />
      </Router>
    </>
  );
}

export default App;
