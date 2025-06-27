import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Whiskeys from "./components/Whiskeys";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import AiRecipe from "./components/AiRecipe";
import { ToastContainer } from "react-toastify";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Whiskeys />
      <AiRecipe />
      <About />
      <Art />
      <Menu />
      <Contact />
      <ToastContainer />
    </main>
  );
};

export default App;
