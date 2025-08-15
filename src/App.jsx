import DsaPlatforms from "./components/dsaplatforms";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <h1 className="bg-black bg-opacity-90 min-h-screen text-white">
       
      <Navbar />
      <Intro />
      <Skills /> 
      <DsaPlatforms />
      <Projects />
    </h1>
  )
}