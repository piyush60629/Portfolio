
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
// import Cube from './components/Cube';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* <Cube /> */}
        <Experience />
        <Projects />
        <Education />
        <TechnicalSkills />
      </div>
    </div>
  );
};

export default App;
