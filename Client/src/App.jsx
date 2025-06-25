import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import {Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from "./pages/About.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}
