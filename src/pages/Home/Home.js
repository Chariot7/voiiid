import img from "../../Assets/LG_Frieze_Booth.png";
import img2 from "../../Assets/StanbyME.png";
import "./home.css";

const home = function () {
  document.body.style.overflow = "auto";
  return (
    <>
      <div className="page">
        <h2>LG - Frieze, New York</h2>
        <h5>StanbyME Web App : Design & Build</h5>
        <div className="col-3">
          <img src={img2} alt="artwork" className="screen" />
        </div>
        <div className="col-8">
          <img src={img} alt="artwork" className="booth" />
        </div>

      </div>
    </>
  );
};
export default home;
