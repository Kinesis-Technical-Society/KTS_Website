import { useState } from "react";

// import './App.css'
import MainSection from "./components/Home/MainSection";
import Contact from "./components/Contact/Contact";

import Home from "./components/Home/home_section";
import Team_Member from "./components/TeamMembers/Team";
import Header from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Foooter/Footer";
import Project from "./components/Project/Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Team" element={<Team_Member />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Project />} />
        </Routes>
      
      </div>
    </>
  );
}

export default App;
