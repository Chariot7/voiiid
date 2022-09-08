import Navbar from "./Navbar";
import Paint from "./pages/Paint";
import About from "./pages/About";
import Home from "./pages/Home/Home";
import Spiral from "./pages/Spiral";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/triangle" element={<About />} />
          <Route path="/circle" element={<Paint />} />
          <Route path="/square" element={<Spiral />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
