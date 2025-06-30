import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import SignUpPage from "./pages/SignUp.jsx";
import LoginPage from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Explore from "./pages/Explore.jsx";
import Profile from "./pages/Profile.jsx";
// import ProtectedRoute from "./components/protected/ProtectedRoute.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />

        {/* <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}
