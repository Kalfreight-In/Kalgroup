import React, { useState } from 'react';
import './App.css';
import './simplefunction.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './Components/ErrorBoundary';
import Navbar from './Components/Navbar';
import { CommmingSoonComponentindex } from './Components/CommmingSoonComponent';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footernewcomp/Footer';
import BottomBar from './Components/Bottombar';
import Trailer_and_Leasing from './pages/TrailerandLeasing';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} ></Sidebar>
      <ErrorBoundary>
        <Navbar toggle={toggle}></Navbar>
      </ErrorBoundary>

      <Routes>
        <Route path="/" element={<Home />} exact />   
        <Route
          path="/trailerandleasing"
          element={<Trailer_and_Leasing />}
        ></Route>
        <Route
          path="/partz"
          element={
            <CommmingSoonComponentindex data="partz"></CommmingSoonComponentindex>
          }
        />
        <Route
          path="/tires"
          element={
            <CommmingSoonComponentindex data="tires"></CommmingSoonComponentindex>
          }
        />

        <Route path="/Bigrigcananda" element={<></>} />
      </Routes>
      <Footer />
      {/* <FooterSection></FooterSection> */}
      <BottomBar />
    </Router>
  );
}

export default App;
