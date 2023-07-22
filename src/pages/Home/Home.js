import "./home.css";
import ReactPlayer from "react-player";

const home = function () {
  document.body.style.overflow = "auto";
  let element = document.getElementsByClassName("page");
  element[0] ? (element = element[0].offsetHeight) : (element = element[0]);
  return (
    <>
      <ReactPlayer url= 'https://vimeo.com/847634102?share=copy' muted={true} controls={false} playing={true} loop={true} height="31vh" width='100vw' style={{
            paddingBottom: '0px',
            margin: 'auto'
      }}/>
      <ReactPlayer url= 'https://vimeo.com/847633283?share=copy' muted={true} controls={false} playing={true} loop={true} height="31vh" width='100vw' style={{
              paddingBottom: '0px',
              margin: 'auto'
      }}/>
      <ReactPlayer url= 'https://vimeo.com/847650942?share=copy' muted={true} controls={false} playing={true} loop={true} height="35vh" width='100vw' style={{
            paddingBottom: '0px',
            margin: 'auto'
      }}/>
    </>
  );
};
export default home;
