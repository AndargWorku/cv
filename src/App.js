import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Expriance from "./components/Expriance"


function App() {
  return (
    <div className="App bg-[#0a192f]">
    <Navbar/>
    <Home/>
    <About />
    <Skills />
    <Work/>
    <Contact/>
    <Expriance/>
    </div>
  );
};

export default App;
