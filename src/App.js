import Navbar from './Navbar'
import Paint from './pages/Paint'
import About from './pages/About'
import Home from './pages/Home'
import Spiral from './pages/Spiral'
import {Route, Routes} from "react-router-dom"
import Radium, { StyleRoot } from 'radium';


function App() {
  
  return (
    <StyleRoot>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/paint" element={<Paint/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/spiral" element={<Spiral/>}/>
      </Routes>
    </div>
    </StyleRoot>
  );
}

export default Radium(App);
