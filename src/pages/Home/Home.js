import img from "../../Assets/LG_Frieze_Booth.png";
import img2 from "../../Assets/StanbyME.png";
import "./home.css";

const home = function () {
  document.body.style.overflow = "auto";
  let element = document.getElementsByClassName("page");
  element[0] ? (element = element[0].offsetHeight) : (element = element[0]);
  return (
    <>
      <div className="page">
        <h2>LG - Frieze, New York (Website - UNDER CONSTRUCTION)</h2>
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
