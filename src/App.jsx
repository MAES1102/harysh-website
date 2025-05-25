import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aerospace from "./pages/aerospace";
import Astronomy from "./pages/astronomy";
import Join from "./pages/join";
import Contact from "./pages/contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* background image with overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/background.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aerospace" element={<Aerospace />} />
        <Route path="/astronomy" element={<Astronomy />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
