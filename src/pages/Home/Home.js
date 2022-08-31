import img from "../../Assets/Frieze.png";
import img2 from "../../Assets/StanbyME.png";
import screen1 from "../../Assets/stanby1.png";
import screen2 from "../../Assets/stanby2.png";
import screen3 from "../../Assets/stanby3.png";
import "./home.css";

const home = function () {
  document.body.style.overflow = "auto";
  return (
    <>
      <div className="page">
        <h1>LG - Frieze, New York</h1>
        <h4>Designed & Built</h4>
        <div className="col-3">
          <img src={img2} alt="artwork" className="image" />
        </div>
        <div className="col-8">
          <img src={img} alt="artwork" className="image" />
        </div>

        <img src={screen1} alt="" />

        <img src={screen2} alt="" />

        <img src={screen3} alt="" />
      </div>
    </>
  );
};
export default home;
