import img from '../Assets/LG_Frieze.png'
import img2 from '../Assets/StanbyME.png'
import screen1 from '../Assets/stanby1.png'
import screen2 from '../Assets/stanby2.png'
import screen3 from '../Assets/stanby3.png'

const {innerWidth, innerHeight} = window;
export default function(){
    return (
    <>
    <div style={{
        // border: '1px solid black',
        height: "84vh",
        margin: "auto",
        marginTop: "4vh",
        position: "relative",
        aspectRatio: 'auto 16/9'
    }}>
        <img src={img2}
            alt="artwork"
            className="image"
            style={{ height: '65%',
            left: '7%',
            top: '19%',
            position: 'absolute',
             }}/>
        <img src={img}
            alt="artwork"
            className="image"
            style={{ height: '65%',
            right: '7%',
            top: '19%',
            position: 'absolute',
            borderRadius:'0.75%' }}/>
    </div>
    <div
    style={{
        // border: '1px solid black',
        height: "93vh",
        margin: "auto",
        marginTop: "7vh",
        position: "relative",
        aspectRatio: 'auto 16/10'}}>
            <div style={{
                // border: '1px solid black',
                width: "30%",
                aspectRatio: 'auto 4/7',
                top: "4%",
                left:"1%",
                position: 'absolute'
            }}>
                <img src={screen1}style={{
                    height: "100%",
                }}/>
            </div>
            <div style={{
                // border: '1px solid black',
                width: "30%",
                aspectRatio: 'auto 4/7',
                top: "4%",
                left:"34%",
                position: 'absolute'
            }}>
                <img src={screen2}style={{
                    height: "100%",
                }}/>
            </div>
            <div style={{
                // border: '1px solid black',
                width: "30%",
                aspectRatio: 'auto 4/7',
                top: "4%",
                left:"67%",
                position: 'absolute'
            }}>
                <img src={screen3} style={{
                    height: "100%",
                }}/>
            </div>

    </div>
    </>
    )
}