import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import Header from './pages/Header';
import Banner from './pages/Banner';
import Home from './pages/Home';
import Footer from './pages/Footer';
import { ThemeProvider } from "./context/theme";


function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

 
  return (

    <ThemeProvider value={{ darkMode, toggleDarkMode }}>   
      <Router>
        <Header />
        <Banner/>
        <Home/>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
