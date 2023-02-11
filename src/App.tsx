import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <Home />
      <AboutMe />
      <p className="text-red-500">hello</p>
    </div>
  );
}

export default App;
