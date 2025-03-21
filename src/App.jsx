import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


import Header from './pages/Header';
import Banner from './pages/Banner';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
        
    <Router>
            <Header/>
            <Banner/>
            <Contact/>
            <Services/>
            <Footer/>
      <Routes>
       
        <Route path="/about" element={<Banner />} />
      </Routes>
    </Router>
  );
}

export default App;
