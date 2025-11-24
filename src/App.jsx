// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-800 overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 max-w-5xl">
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;