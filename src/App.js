import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [components] = useState([
        {
            href: '#about',
            component: <About />
        },
        {
            href: '#projects',
            component: <Projects />
        },
        {
            href: '#resume',
            component: <Resume />
        },
        {
            href: '#contact',
            component: <Contact />
        },
    ]);
    const [currentComp, setCurrentComp] = useState(components[0]);

  return (
    <>
        <Header components={components} currentComp={currentComp} setCurrentComp={setCurrentComp} />

        <main>
            {currentComp.component}
        </main>

        <Footer />
    </>
  );
}

export default App;
