import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
