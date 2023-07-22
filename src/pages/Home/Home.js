import "./home.css";
import ReactPlayer from "react-player";

const home = function () {
  document.body.style.overflow = "auto";
  let element = document.getElementsByClassName("page");
  element[0] ? (element = element[0].offsetHeight) : (element = element[0]);
  return (
    <>
      <ReactPlayer url= 'https://youtu.be/iSFIGF3dtgA' playing={true} loop={true} height="32vh" width='100vw' style={{
            paddingBottom: '0px',
            margin: 'auto'
      }}/>
      <ReactPlayer url= 'https://youtu.be/Eqd1rLVG1zc' playing={true} loop={true} height="32vh" width='100vw' style={{
            paddingBottom: '0px',
            margin: 'auto'
      }}/>
      <ReactPlayer url= 'https://youtu.be/khPu9R58U64' playing={true} loop={true} height="32vh" width='100vw' style={{
            paddingBottom: '0px',
            margin: 'auto'
      }}/>
    </>
  );
};
export default home;
