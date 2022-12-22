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
import Snowfall from 'react-snowfall';
import { UnderConstruction } from './Components/UnderConstruction';
import Register from './pages/Register';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <ErrorBoundary>
        <Navbar toggle={toggle}></Navbar>
      </ErrorBoundary>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '20',
          pointerEvents: 'none',
        }}
      >
        <Snowfall
          style={{ zIndex: '20' }}
          height="100%"
          width="100%"
          color="#ffff"
          snowflakeCount={100}
          radius={[0.3, 2.0]}
          speed={[0.5, 4.0]}
          wind={[-0.5, 2.0]}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Register" element={<Register />} exact></Route>
        {/* <Route
          path="/trailerandleasing"
          element={<Trailer_and_Leasing />}
        ></Route> */}
        {/* <Route
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
        /> */}

        {/* <Route path="/Bigrigcananda" element={<></>} /> */}
        <Route
          exact
          path="*"
          title="Error"
          element={
            <UnderConstruction icon="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalGfooterlogo.png" />
          }
        />
      </Routes>

      <Footer />
      {/* <FooterSection></FooterSection> */}
      <BottomBar />
    </Router>
  );
}

export default App;
