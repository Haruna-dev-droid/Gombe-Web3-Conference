import { useState } from "react";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=""></div>
      <Navbar />
      <LandingPage />
      <AboutEvent />
      <Agenda />
      <Speakers />
      <Schedule />
      <CommunityPartners />
      <Footer />
    </>
  );
}

export default App;
