

import About from './Components /About';
import Contact from './Components /Contact';
import Navbar from './Components /Navbar';
import Skills from './Components /Skills';



function App() {
  return (
    <main className="text-gray-400 bg-gray-900 " >
      <Navbar/>
      <About />
      <Skills />
      <Contact/>
      
    </main>
  );
}

export default App;
