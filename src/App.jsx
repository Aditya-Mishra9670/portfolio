import DsaPlatforms from "./components/dsaplatforms";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

export default function App() {
  return (
    <div className="bg-black bg-opacity-90 min-h-screen text-white">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <DsaPlatforms />
      <Projects />
    </div>
  )
}