import Navbar from "./Navbar";
import Circle from "./pages/Circle";
import Triangle from "./pages/Triangle";
import Home from "./pages/Home/Home";
import Square from "./pages/Square";
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
        </Routes>
      </div>
    </>
  );
}

export default App;
