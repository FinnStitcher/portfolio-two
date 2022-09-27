import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
        <Header />

        <main>
            <About />
            <Resume />
            <Projects />
            <Contact />
        </main>

        <Footer />
    </>
  );
}

export default App;
