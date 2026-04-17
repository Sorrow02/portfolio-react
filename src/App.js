import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  return (
    <>
      <button 
  className="back-to-top" 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <FaArrowUp />
</button>

      <div className="App">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        <footer className="footer">
  <p>© {new Date().getFullYear()} Wael. Built with React 💜</p>
</footer>
      </div>
    </>
  );
}

export default App;