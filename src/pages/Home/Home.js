import img from "../../Assets/LG_Frieze_Booth.png";
import img2 from "../../Assets/StanbyME.png";
import "./home.css";

const home = function () {
  document.body.style.overflow = "auto";
  console.log(document.getElementsByClassName('page')[0].offsetHeight)
  return (
    <>
      <div className="page">
        <h2>LG - Frieze, New York</h2>
        <h5>window innerHeight: {window.innerHeight}</h5>
        <h5>div at 1oovh - 50px: {document.getElementsByClassName('page')[0].offsetHeight}</h5>
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
