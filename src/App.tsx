
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
      
        {/* <Cube /> */}
        <Experience />
        <Projects  />
        <Education />
        <TechnicalSkills />
      
    </div>
  );
};

export default App;
