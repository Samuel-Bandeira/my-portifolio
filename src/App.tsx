import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <div className="w-[60%] m-auto flex flex-col justify-start">
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
