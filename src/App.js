import Navbar from "./Navbar";
import Circle from "./pages/Circle";
import Triangle from "./pages/Triangle";
import Home from "./pages/Home/Home";
import Square from "./pages/Square";
import Particles from "./pages/Particles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/triangle" element={<Triangle />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/square" element={<Square />} />
          <Route path="/particles" element={<Particles />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
