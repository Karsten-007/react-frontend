import React from 'react';
import Navbar from './components/Navbar';  // ← Changé Header en Navbar
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* ← Changé Header en Navbar */}
      <Hero />
      <Projects />  
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;