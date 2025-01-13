import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const App = () => {
  return (
    <div>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tools/>
    <Projects/>
    <Contact/>
    
    </div>
  )
}
export default App;