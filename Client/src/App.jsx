import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import {Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from "./pages/About.jsx";
import SignUpPage from "./pages/SignUp.jsx";
import LoginPage from "./pages/Login.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />

      </Routes>
    </div>
  );
}
