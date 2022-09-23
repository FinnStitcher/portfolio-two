import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <>
        <Header />

        <main>
            <About />
            <Resume />
            <Projects />
        </main>

        <Footer />
    </>
  );
}

export default App;
