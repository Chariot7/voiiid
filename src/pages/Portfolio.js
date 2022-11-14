import ReactPlayer from "react-player";
import video from '../videos/Spin.mov'

export default function Portfolio() {
  return (
   <>
          <ReactPlayer url= 'https://youtu.be/iSFIGF3dtgA' playing={true} loop={true} height="700px" width='1400px' style={{
            paddingBottom: '38px',
            margin: 'auto'
          }}/>
          <ReactPlayer url= 'https://youtu.be/Eqd1rLVG1zc' playing={true} loop={true} height="700px" width='1400px' style={{
            paddingBottom: '38px',
            margin: 'auto'
          }}/>
          <ReactPlayer url= 'https://youtu.be/i7FcBWhrEbY' playing={true} loop={true} height="700px" width='1400px' style={{
            paddingBottom: '38px',
            margin: 'auto'
          }}/>

   </>
  )
        }
